import React, { Component } from 'react';
import './BookListItem.css';

class BookListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreDetails: false
    };
  }

  setShowMoreDetails(show) {
    this.setState({
      showMoreDetails: show
    });
  }

  render() {
    const moreDetails = this.state.showMoreDetails
      ? <p>{this.props.details}</p>
      : '';
    return(
      <li className="book-list-item">
        <h3 className="book-list-item-title">{this.props.title}</h3>
        <div className="book-list-item-row">
          <div className="book-list-item-content">
            <p>Author: {this.props.author}</p>
            <p>Price: {this.props.price}</p>
            <p>{this.props.description}</p>
            <a href="#" onClick={e => this.setShowMoreDetails(true)}>Show more details</a>
            { moreDetails }
          </div>
          <div className="book-list-item-image">
            <img src={this.props.image} alt="" className="book-list-item-image-src"/>
          </div>
        </div>
      </li>
    );
  }
}

export default BookListItem;