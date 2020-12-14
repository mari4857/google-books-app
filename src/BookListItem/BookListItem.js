import React, { Component } from 'react';
import './BookListItem.css';

export default function BookListItem(props) {
  const { book } = props;

  let author;
  let title;
  let thumbnailUrl;
  let previewUrl;
  let description;
  let cost;

  //handling abnormal responses
  if ( book.volumeInfo ) {
    author = book.volumeInfo.authors !== undefined
      ? book.volumeInfo.authors[0]
      : 'No authors listed'
    title = book.volumeInfo.title !== undefined
      ? book.volumeInfo.title
      : 'No title listed';
    thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail !== undefined
      ? book.volumeInfo.imageLinks.thumbnail
      : 'https://via.placeholder.com/300';
    previewUrl = book.volumeInfo.previewLink !== undefined
      ? book.volumeInfo.previewLink
      : 'https://books.google.com/';
    description = book.volumeInfo.description !== undefined
      ? book.volumeInfo.description
      : 'No description listed';
  } else {
    author = null;
    title = null;
    thumbnailUrl = null;
    previewUrl = null;
    description = null;
  }

  if ( book.saleInfo ) {
    if(book.saleInfo.saleability === 'FOR_SALE') {
      cost = '$' + book.saleInfo.listPrice.amount;
    } else if(book.saleInfo.saleability === 'NOT_FOR_SALE') {
      cost = 'Not For Sale';
    } else if(book.saleInfo.saleability === 'FOR_SALE_AND_RENTAL') {
      cost = '$' + book.saleInfo.listPrice.amount;
    } else if(book.saleInfo.saleability === 'FREE') {
      cost = '$0'
    }
  } else {
    cost = null;
  }

  return(
    <a href={ previewUrl } target="blank" className="book-list-anchor">
      <li className="book-list-item">
        <h3 className="book-list-item-title">{ title }</h3>
        <div className="book-list-item-row">
          <div className="book-list-item-content">
            <p><strong>Author:</strong> { author }</p>
            <p><strong>Price:</strong> { cost }</p>
            <p>{ description }</p>
          </div>
          <div className="book-list-item-image">
            <img src={ thumbnailUrl } alt={`The cover of the book titled ${title}`} className="book-list-item-image-src"/>
          </div>
        </div>
      </li>
    </a>
  );
}