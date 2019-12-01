import React, { Component } from "react";
import PropTypes from "prop-types";

class Gif extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  state = { play: false };

  onClick() {
    this.setState({ play: !this.state.play });
  }

  render() {
    const { data } = this.props;
    const { play } = this.state;

    return (
      <div className="gif-container" onClick={this.onClick} role="img" aria-describedby={`Title: ${data.title}`}>
        <img src={play ? data.imageUrl : data.staticImageUrl} alt={data.title} />
      </div>
    );
  }
}

export default Gif;
