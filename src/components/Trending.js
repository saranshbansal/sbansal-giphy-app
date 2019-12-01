import React, { Component } from "react";
import { fetchTrending } from "../resources/api";
import * as utils from "../resources/util";
import GifList from "./GifList";
import Loader from "./library/Loader";

class Trending extends Component {
  constructor(props) {
    super(props);

    this.refreshResults = this.refreshResults.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  state = {
    gifs: [],
    limit: 20,
    offset: 0,
    loading: false
  };

  componentDidMount() {
    this.refreshResults();

    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  async refreshResults(offset = 0) {
    const { gifs, limit } = this.state;

    let gifsContent = gifs;

    try {
      const result = await fetchTrending(offset, limit);

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
        loading: false
      });
    }
  }

  onScroll() {
    const { offset, limit } = this.state;

    if (utils.scrolledToBottom()) {
      console.log("at the bottom");
      //fetch new data and append to existing list
      this.refreshResults(limit + offset + 1);
    }
  }

  render() {
    const { gifs, loading } = this.state;

    const hasResults = !!gifs && gifs.length > 0;
    const showResults = hasResults && !loading;

    return (
      <div className="trending">
        {loading && <Loader />}

        {showResults && (
          <div className="gifs">
            <GifList data={gifs} />
          </div>
        )}
      </div>
    );
  }
}

export default Trending;
