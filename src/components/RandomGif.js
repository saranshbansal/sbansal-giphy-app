import React, { Component } from "react";
import Gif from "./Gif";
import Loader from "./library/Loader";
import { fetchRandom } from "../resources/api";

class RandomGif extends Component {
  constructor(props) {
    super(props);

    this.refreshResults = this.refreshResults.bind(this);
  }

  state = {
    loading: false,
    gif: null
  };

  componentDidMount() {
    this.refreshResults();
  }

  async refreshResults() {
    let gifContent = null;

    try {
      this.setState({
        loading: true
      });

      const result = await fetchRandom();

      if (!!result && result.data) {
        gifContent = {
          id: result.data.id,
          imageUrl: result.data.images.downsized_large.url,
          staticImageUrl: result.data.images.downsized_still.url,
          title: result.data.title
        };
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        loading: false,
        gif: gifContent
      });
    }
  }

  render() {
    const { gif, loading } = this.state;

    const showResults = gif && !loading;

    return (
      <div className="random">
        {!showResults && <Loader />}

        <button className="btn" onClick={this.refreshResults} aria-label="Randomise">
          RANDOMISE
        </button>

        {showResults && <Gif data={gif} />}
      </div>
    );
  }
}

export default RandomGif;
