import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { term: '' };

    // Bind event handlers for proper `this` context
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange}
        className="form-control" />
    );
  }
}

export default SearchBar;
