import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const showingBooks = this.props.books.filter((book) => (book.shelf === this.props.shelfTitle))
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks.map((book) => (
                        <Book key={book.id} book={book}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookShelf;