import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  render() {
    return(
      <div className="filters-band container">
        <form action="" className="filters-form">
          <div className="filter-form-row">
            <label htmlFor="printType" className="filters-form-label">Print Type:</label>
            <select
              name="printType"
              id="printType"
              className="filters-form-select">
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
              className="filters-form-select">
              <option value="no-filter">No Filter</option>
              <option value="partial">Partially Previewable Text</option>
              <option value="full">Fully Previewable Text</option>
              <option value="free-ebooks">Free Google eBooks</option>
              <option value="paid-ebooks">Paid Google eBooks</option>
              <option value="ebooks">All Google eBooks</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Filters;