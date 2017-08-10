import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Bookcase from './Bookcase'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <Bookcase books={this.state.books} />
        )}/>
        <Route path='/search' render={({ history }) => (
            <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
