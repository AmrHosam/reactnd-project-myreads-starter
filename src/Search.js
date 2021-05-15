import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        showingResults: []
    }
    updateShelf = (book, newShelf) => {
        this.setState((prevState) => ({
            showingResults: prevState.showingResults.map((prevBook) => prevBook.id === book.id ? {...prevBook, shelf:newShelf} : prevBook)
          }))
        this.props.onUpdateShelf(book, newShelf);
    }
    updateQuery = (event) => {
        event.preventDefault();
        const { books } = this.props;
        const showingResults = []
        if(event.target.value !== "") {
            BooksAPI.search(event.target.value).then((results) => {
                if(Array.isArray(results)) {
                    Object.keys(results).filter((id) => (results[id].imageLinks)).map((id) => {
                        const foundBook = books.find((book) => (book.id === results[id].id))
                        if(foundBook) {
                            showingResults.push(foundBook)
                        } else {
                            const newBook = {
                                id: results[id].id,
                                title: results[id].title,
                                authors: results[id].authors,
                                shelf: "none",
                                thumbnail: results[id].imageLinks.thumbnail
                            }
                            showingResults.push(newBook)
                        }

                    })
                }
                this.setState({showingResults: showingResults})
            })
        } else {
            this.setState({showingResults: []})
        }
    }
    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.updateQuery}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf
                        books={this.state.showingResults}
                        shelfTitle={"all"}
                        onUpdateShelf={this.updateShelf}/>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default Search;