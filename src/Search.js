import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
class Search extends Component {
    state = {
        query: "",
        showingResults: []
    }
    updateQuery = (event) => {
        event.preventDefault();
        this.setState({ query: event.target.value });
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
                            value={this.state.query}
                            onChange={this.updateQuery}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf
                        books={this.state.showingResults}
                        shelfTitle={"all"}
                        onUpdateShelf={this.props.onUpdateShelf}/>
                </div>
            </div>
        );
    }
}

export default Search;