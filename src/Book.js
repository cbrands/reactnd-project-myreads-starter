import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChangeMenu from './ShelfChangeMenu'

class Book extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        imageLink: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLink})` }}></div>
                            <ShelfChangeMenu shelf={this.props.shelf}/>
                          </div>
                          <div className="book-title">{this.props.title}</div>
                          <div className="book-authors">{this.props.authors.join(", ")}</div>
                        </div>
        )
    }
}

export default Book