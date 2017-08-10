import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChangeMenu from './ShelfChangeMenu'

class Book extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                            <ShelfChangeMenu
                                book={this.props.book}
                                shelf={this.props.shelf}
                                onChangeShelf={this.props.onChangeShelf}/>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors.join(", ")}</div>
                        </div>
        )
    }
}

export default Book