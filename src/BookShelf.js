import React, {Component} from 'react'

class BookShelf extends Component {
    render() {
        const showingBooks = this.props.books.filter((book) => (book.shelf === this.props.shelfTitle))
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks.map((book,index) => (
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select>
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                {book.authors.map((author, index) => (
                                  <div className="book-authors" key={index}>{author}</div>
                                  ))}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookShelf;