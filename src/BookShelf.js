import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const showingBooks = this.props.shelfTitle === "all" ? (this.props.books) : (this.props.books.filter((book) => (book.shelf === this.props.shelfTitle)))
        return(
                <ol className="books-grid">
                    {showingBooks.map((book) => (
                        <Book key={book.id} book={book} onUpdateShelf={this.props.onUpdateShelf}/>
                    ))}
                </ol>
        )
    }
}

export default BookShelf;