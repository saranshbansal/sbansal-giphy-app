import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  state = { value: "" };

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      value
    });

    if (value.length > 2) {
      this.props.onSearch(value);
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.value);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input
          name="search-gif-input"
          type="text"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="Search..."
          value={this.state.value}
          aria-label="Search Keyword"
          aria-required="true"
        />
      </div>
    );
  }
}

export default Search;
