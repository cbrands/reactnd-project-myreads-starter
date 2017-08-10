import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChangeMenu extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {value: this.props.shelf};
        this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  handleChangeShelf = event => {
    this.props.onChangeShelf(this.props.book, event.target.value);
  }

    render() {
        return (
            <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChangeShelf}>
                        <option value="" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
            </div>
        )
    }
}

export default ShelfChangeMenu