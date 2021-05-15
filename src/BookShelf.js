import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {
    const showingBooks = props.shelfTitle === "all" ? (props.books) : (props.books.filter((book) => (book.shelf === props.shelfTitle)))
    return(
        <ol className="books-grid">
            {showingBooks.map((book) => (
                <Book key={book.id} book={book} onUpdateShelf={props.onUpdateShelf}/>
            ))}
        </ol>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
};

export default BookShelf;