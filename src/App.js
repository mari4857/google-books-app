import React, { Component } from 'react'
import './App.css';
import SearchForm from "./SearchForm/SearchForm";
import Filters from "./Filters/Filters";
import BookList from "./BookList/BookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: '',
      bookType: ''
    };
  }

  handleSearchSubmit = ( searchSubmitEvent, searchTerm ) => {
    searchSubmitEvent.preventDefault();
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyCIDUevtXNCgdeFFj3mZfLYSMfT7Nw0Hlk';
    const formattedSearchUrl = this.formatQuery( baseUrl, searchTerm, key );
    fetch( formattedSearchUrl )
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({
          books: [data.items]
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  formatQuery = ( baseUrl, searchTerm, key ) => {
    // example https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
    const { printType, bookType } = this.state;
    let formattedQuery;
    if ( searchTerm !== '') {
      formattedQuery = '?q=' + searchTerm.split(' ').join('+');
    }
    if ( printType !== '') {
      formattedQuery = formattedQuery + '&printType=' + printType;
    }
    if ( bookType !== '') {
      formattedQuery = formattedQuery + '&filter=' + bookType;
    }
    const formattedUrl  = baseUrl + formattedQuery + '&key=' + key;
    console.log('formatted URL: ', formattedUrl);
    return formattedUrl;
  }

  updatePrintType(filter) {
    this.setState({
      printType: filter
    });
  }

  updateBookType(filter) {
    this.setState({
      bookType: filter
    });
  }

  render() {
    const error = this.state.error
      ? <div className="searchFormError">{this.state.error}</div>
      : '';

    return (
      <div className="app">
        <header className="app-header container">
          <h1 className="app-header-title">Google Book Search</h1>
        </header>
        <main>
          <SearchForm handleSearchSubmit={ (e, searchTerm) => this.handleSearchSubmit(e, searchTerm) }/>
          <Filters
            printType={filter => this.updatePrintType(filter)}
            bookType={filter => this.updateBookType(filter)}/>
          { error }
          <BookList books={this.state.books}/>
        </main>
      </div>
    );
  }
}

export default App;
