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

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    const formattedSearchTerm = searchTerm.split(' ').join('+');
    const apiKey = 'AIzaSyCIDUevtXNCgdeFFj3mZfLYSMfT7Nw0Hlk';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm}&key=${apiKey}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          searchTerm: ''
        });
        this.props.showBooks(data.items);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const error = this.state.error
      ? <div className="searchFormError">{this.state.error}</div>
      : '';

    return (
      <div className="search-form-band container">
        <form action="" className="search-form" onSubmit={e => this.handleSubmit(e)}>
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
        { error }
      </div>
    );
  }
}

export default SearchForm;