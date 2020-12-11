import React, { Component } from 'react'
import './App.css';
import SearchForm from "./SearchForm/SearchForm";
import Filters from "./Filters/Filters";
import BookList from "./BookList/BookList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  showBookResults(books) {
    this.setState({
      books: [books]
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header container">
          <h1 className="app-header-title">Google Book Search</h1>
        </header>
        <main>
          <SearchForm showBooks={books => this.showBookResults(books)}/>
          <Filters />
          <BookList books={this.state.books}/>
        </main>
      </div>
    );
  }
}

export default App;
