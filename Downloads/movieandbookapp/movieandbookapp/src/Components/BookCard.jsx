import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onSelect }) => {
  return (
    <div className="book-card" onClick={onSelect}>
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-rating">
          ⭐ {book.rating}
        </div>
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-year">{book.year}</p>
        <p className="book-genre">{book.genre}</p>
        <p className="book-pages">{book.pages} pages</p>
        
        <button className="details-button">
          More Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
