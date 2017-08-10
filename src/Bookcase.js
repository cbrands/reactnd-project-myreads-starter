import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Bookshelf from './Bookshelf'


class Bookcase extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }


    render() {
        return (
        <div className="list-books">
            <Header />
            <div className="list-books-content">
              <div>
                <Bookshelf title={"Currently Reading"} books={this.props.books.filter(book => book.shelf==="currentlyReading")} />
                <Bookshelf title={"Want to Read"} books={this.props.books.filter(book => book.shelf==="wantToRead")} />
                <Bookshelf title={"Read"} books={this.props.books.filter(book => book.shelf==="read")} />
              </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                    >Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Bookcase