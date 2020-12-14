import React, { Component } from  'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  searchTermChanged(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  render() {
    return (
      <div className="search-form-band container">
        <form action="" className="search-form" onSubmit={e => this.props.handleSearchSubmit(e, this.state.searchTerm)}>
          <label htmlFor="searchTerm" className="search-form-label">Search:</label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Henry VIII"
            className="search-form-input"
            value={this.state.searchTerm}
            onChange={e => this.searchTermChanged(e.target.value)}/>
            <div className="button-item">
              <button type="submit" className="btn">Search</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;