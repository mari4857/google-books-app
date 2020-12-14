import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  render() {
    return(
      <div className="filters-band container">
        <form className="filters-form">
          <div className="filter-form-row">
            <label htmlFor="printType" className="filters-form-label">Print Type:</label>
            <select
              name="printType"
              id="printType"
              className="filters-form-select"
              onChange={e => this.props.printType(e.target.value)}>
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="bookType" className="filters-form-label">Book Type:</label>
            <select
              name="bookType"
              id="bookType"
              className="filters-form-select"
              onChange={e => this.props.bookType(e.target.value)}>
              <option value="no-filter">No Filter</option>
              <option value="ebooks">All eBooks</option>
              <option value="free-ebooks">Free eBooks</option>
              <option value="paid-ebooks">Paid eBooks</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Filters;