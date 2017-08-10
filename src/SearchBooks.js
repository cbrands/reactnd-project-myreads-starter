import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {
    static propTypes = {
        foundBooks: PropTypes.array,
        onChangeShelf: PropTypes.func.isRequired,
        getBooksByQuery: PropTypes.func.isRequired
    }

  state = {
    query: ''
  }

  updateQuery = (event) => {
      const maxBooksShown = 20;
      const query = event.target.value;
      console.log(query);
      this.setState({ query: query.trim() });
      this.props.getBooksByQuery(query, maxBooksShown);   
  }

    render() {
                console.log(this.props.foundBooks);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                    to='/'
                    className='close-search'
                    >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.updateQuery}/>
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 {this.props.foundBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    shelf={book.shelf}
                                    onChangeShelf={this.props.onChangeShelf}/>
                            </li>
                        ))}
                </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks