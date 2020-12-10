import React, { Component } from  'react';
import './SearchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <div className="search-form-band container">
        <form action="" className="search-form">
          <label htmlFor="searchTerm" className="search-form-label">Search:</label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Henry VIII"
            className="search-form-input"/>
            <div className="button-item">
              <button type="submit" className="btn">Search</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;