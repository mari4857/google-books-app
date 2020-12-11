import React, { Component } from 'react';
import './BookList.css';
import BookListItem from "../BookListItem/BookListItem";

class BookList extends Component {
  render() {
    //mapping the nested array
    const books = this
          .props
          .books
          .map(nested => nested.map((book, i) => <BookListItem {...book} key={i} title={book.volumeInfo.title ? book.volumeInfo.title : '~No Title Provided~'} author={book.volumeInfo.authors ? book.volumeInfo.authors : '~No Author Provided~'} price={book.saleInfo.saleability === 'FOR_SALE' ? book.saleInfo.retailPrice.amount + ' ' + book.saleInfo.retailPrice.currencyCode : 'Not for sale'} description={book.volumeInfo.description ? book.volumeInfo.description : ''} image={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''} details={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ''}/>));

    return(
      <div className="book-list-row container">
        <ul className="book-list">
          { books }
        </ul>
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

export default BookList;