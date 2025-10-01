import React, { useState } from 'react';
import { books } from '../data/mockData';
import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ onBookSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.genre.toLowerCase().includes(term)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="book-list-container">
      <div className="search-section">
        <h1>📚 Books</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search books by title, author, or genre..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            onSelect={() => onBookSelect(book)}
          />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-results">
          <p>No books found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
