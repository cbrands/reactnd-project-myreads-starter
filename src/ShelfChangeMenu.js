import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChangeMenu extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {value: this.props.shelf};
        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
      alert('changing to: ' + event.target.value);
  }

    render() {
        return (
            <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChange}>
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