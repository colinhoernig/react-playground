import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key={book.id}>
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

// Export container (currying, yay!)
export default connect(mapStateToProps)(BookList);
