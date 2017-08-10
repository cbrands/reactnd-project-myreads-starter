import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChangeMenu from './ShelfChangeMenu'

class Book extends Component {
    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const book = this.props.book;
        const title = book.title || 'Unknown';
        const authors = book.authors || ['Unknown'];
        const cover = (book.imageLinks && book.imageLinks.thumbnail) || "../images/nocover.jpg";
        return (
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                            <ShelfChangeMenu
                                book={book}
                                onChangeShelf={this.props.onChangeShelf}/>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors.join(", ")}</div>
                        </div>
        )
    }
}

export default Book