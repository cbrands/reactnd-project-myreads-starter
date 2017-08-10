# Myreads

## Usage
To start the application run the following commands
```
npm install
npm start
```
The application will now run on localhost:3000.

### Mainpage
Three bookshelves will be shown
* Currently Reading
* Want to Read
* Read

At the bottom right of each book there is a drop down menu. In this menu the user can select a new bookshelf for the book. The book will then move to the choosen bookshelf.
At the bottom of the page is a big plus icon. This is a link to the search page

### Search page
At the top left there is an arrow-left icon. This will bring the user back to the main page. The searchbar works as the user wil expect it to work. With the exception that only certain search terms are supporte. Please see SEARCH\_TERMS.md for a complete list.
Below the searchbar the resulting books will be show. 

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## Architecture
From the original README
> Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

I have created / adapted the following components
* Index.js --Added BrowserRouter
* App.js --Navigation and communication with the backend.
* SearchBooks.js --This component displays the search page
* Bookcase.js --This component shows the main page
* Bookshelf.js --Displays one shelf
* Book.js --Displays one book
* ShelfChangeMenu --Displays the menu to select the bookshelf to move the book

## Defensive programming
Were possible I tried to account for inconsistent data. Books that return from the backend are not guaranteed to have a title, cover, or authors. To prevent error I supplied default values. For example
```
const title = book.title || 'Unknown';
const authors = book.authors || ['Unknown'];
const cover = (book.imageLinks && book.imageLinks.thumbnail) || "../images/nocover.jpg";
```
