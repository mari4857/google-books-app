import React, { Component } from 'react';
import './BookList.css';
import BookListItem from "../BookListItem/BookListItem";

class BookList extends Component {
  render() {
    //mapping the nested array
    const { books } = this.props;
    let bookList;

    if (typeof books[0] === 'undefined' && books.length >= 1) {
      bookList = <li className="book-list-item">No entries found, please try another search.</li>;
    } else {
      bookList = books
                .map(nested => nested.map((book, i) => <BookListItem
                  book={ book }
                  key={ i } />));
    }

    return(
      <div className="book-list-row container">
        <ul className="book-list">
          { bookList }
        </ul>
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

export default BookList;