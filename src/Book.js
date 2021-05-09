import React, { Component } from 'react';

class Book extends Component {

  handleChange = (event) => {
    event.preventDefault();
    this.props.onUpdateShelf(this.props.book, event.target.value);
  }

  render() {
      const { title, authors, thumbnail, shelf } = this.props.book;
      return(
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={shelf} onChange={this.handleChange}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
              {authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
              ))}
          </div>
      </li>
      )
  }
}

export default Book;