import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import SearchBooks from './SearchBooks'
import Bookcase from './Bookcase'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        foundBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    changeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }))
        })
    }

    getBooksByQuery = (query, maxBooksShown) => {
        if (query && query !== '') {
            BooksAPI.search(query, maxBooksShown).then((foundBooks) => {
                foundBooks.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                this.setState({
                    foundBooks: foundBooks.sort(sortBy('title'))
                });
            })
        } else {
            this.setState({
                foundBooks: []
            });
        }
    }

    render() {
        return ( 
            <div className = "app">
                <Route exact path = '/' render={() => (
                    <Bookcase
                        books={this.state.books}
                        onChangeShelf={this.changeShelf}/>
                )}/>
                <Route path = '/search' render={({history}) => (
                    <SearchBooks
                        foundBooks={this.state.foundBooks}
                        onChangeShelf={this.changeShelf}
                        getBooksByQuery={this.getBooksByQuery}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp