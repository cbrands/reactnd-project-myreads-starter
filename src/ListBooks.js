import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Bookshelf from './Bookshelf'


class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }


    render() {
        return (
        <div className="list-books">
            <Header />
            <div className="list-books-content">
              <div>
                <Bookshelf title={"Currently Reading"} shelf="currentlyReading" books={this.props.books} />
                <Bookshelf title={"Want to Read"} shelf="wantToRead" books={this.props.books} />
                <Bookshelf title={"Read"} shelf="read" books={this.props.books} />
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

export default ListBooks