import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      const booksArr = []
      Object.keys(books).map((id) => {
        const newBook = {
          id: books[id].id,
          title: books[id].title,
          authors: books[id].authors,
          shelf: books[id].shelf,
          thumbnail: books[id].imageLinks.thumbnail
        }
        booksArr.push(newBook)
      })
      this.setState({books: booksArr})
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.getAllBooks();
    })
  }

  componentDidMount() {
    this.getAllBooks();
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search books={this.state.books} onUpdateShelf={this.updateShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                      books={this.state.books}
                      shelfTitle={"currentlyReading"}
                      onUpdateShelf={this.updateShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                      books={this.state.books}
                      shelfTitle={"wantToRead"}
                      onUpdateShelf={this.updateShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                      books={this.state.books}
                      shelfTitle={"read"}
                      onUpdateShelf={this.updateShelf}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
