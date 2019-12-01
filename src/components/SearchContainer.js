import React, { Component } from "react";
import { fetchByKeyword } from "../resources/api";
import GifList from "./GifList";
import Loader from "./library/Loader";
import Search from "./Search";

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.refreshResults = this.refreshResults.bind(this);
  }

  state = {
    gifs: [],
    limit: 20,
    offset: 0,
    loading: false,
    searchText: ""
  };

  async handleSearch(searchText, offset = 0) {
    const { limit } = this.state;

    // Always reset result on fresh search
    let gifsContent = [];

    try {
      this.setState({
        loading: true
      });

      const result = await fetchByKeyword(searchText, offset, limit);

      if (!!result && result.data) {
        result.data.map(gif => {
          return gifsContent.push({
            id: gif.id,
            imageUrl: gif.images.fixed_height_downsampled.url,
            staticImageUrl: gif.images.fixed_height_still.url,
            title: gif.title,
          });
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        gifs: gifsContent,
        offset: offset,
        loading: false,
        searchText
      });
    }
  }

  async refreshResults() {
    const { gifs, searchText, limit, offset } = this.state;

    const nextOffset = offset + limit + 1;

    // Always append result on clicking `more...`
    let gifsContent = gifs;

    try {
      const result = await fetchByKeyword(searchText, nextOffset, limit);

      if (!!result && result.data) {
        result.data.map(gif => {
          return gifsContent.push({
            id: gif.id,
            imageUrl: gif.images.fixed_height_downsampled.url,
            staticImageUrl: gif.images.fixed_height_still.url,
            title: gif.title,
          });
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        gifs: gifsContent,
        offset: nextOffset,
        loading: false
      });
    }
  }

  render() {
    const { loading, gifs } = this.state;

    const hasResults = !!gifs && gifs.length > 0;
    const showResults = hasResults && !loading;

    return (
      <div className="search">
        <Search onSearch={this.handleSearch} />

        {loading && <Loader />}

        {showResults && (
          <div className="gifs">
            <GifList data={gifs} />

            <button className="btn btn-more" onClick={this.refreshResults} aria-label="Show More">
              More...
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchContainer;
