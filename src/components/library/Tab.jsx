import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { activeTab, label } = this.props;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " active";
    }

    return (
      <li className={className} onClick={this.handleClick} role="tab" aria-selected={activeTab ? "true" : "false"} area-label={label}>
        {label}
      </li>
    );
  }
}

export default Tab;
