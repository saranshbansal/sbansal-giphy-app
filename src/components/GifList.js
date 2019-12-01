import React, { Component } from "react";
import Gif from "./Gif";
import PropTypes from "prop-types";

class GifList extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    data: [],
  };

  render() {
    const { data } = this.props;
    const hasGifs = !!data && data.length !== 0;

    if (!hasGifs) return null;

    return (
      <>
        {data.map((gif, index) => <Gif key={`${index}.${gif.id}`} data={gif} />)}
      </>
    );
  }
}

export default GifList;
