import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          key={book.id}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever gets returned from mapStateToProps will show
// up as props inside of BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as
// props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers (dispatch receives actions and sends them to all reducers)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.  This makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
