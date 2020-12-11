import React, { Component } from 'react';
import './BookListItem.css';

export default function BookListItem(props) {
  return(
    <li className="book-list-item">
      <h3 className="book-list-item-title">{props.title}</h3>
      <div className="book-list-item-row">
        <div className="book-list-item-content">
          <p><strong>Author:</strong> {props.author}</p>
          <p><strong>Price:</strong> {props.price}</p>
          <p>{props.description}</p>
          <a href={props.details} target="_blank" className={props.details.length? '' : 'hide-details'}>More Details</a>
        </div>
        <div className="book-list-item-image">
          <img src={props.image} alt="" className="book-list-item-image-src"/>
        </div>
      </div>
    </li>
  );
}