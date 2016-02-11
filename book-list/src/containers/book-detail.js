import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>
          <h3>Select a Book</h3>
        </div>
      );
    }

    return (
      // We can use this.props.book because we mapped state to props
      <div>
        <h3>{this.props.book.title} <small>({this.props.book.pages} pages)</small></h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
