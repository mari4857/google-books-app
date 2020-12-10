import React, { Component } from 'react';
import './BookList.css';
import BookListItem from "../BookListItem/BookListItem";
import testImage from './test-gray.jpg';

class BookList extends Component {
  render() {
    // const bookListItems = <div><li>book list item 1</li><li>book list item 2</li></div>;
    return(
      <div className="book-list-row container">
        <ul className="book-list">
          <BookListItem title="Henry I" author="C. Warren Hollister" price="$50.00" description="The resulting volume is one that will be welcomed by students and general readers alike." image={testImage} details="more details description blah" />
          <BookListItem title="Henry I" author="C. Warren Hollister" price="$50.00" description="The resulting volume is one that will be welcomed by students and general readers alike." image={testImage} details="more details description blah" />
        </ul>
      </div>
    );
  }
}

export default BookList;