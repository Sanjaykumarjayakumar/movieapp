import React, { useState } from 'react';
import { movies } from '../data/mockData';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ onMovieSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(term) ||
      movie.genre.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="movie-list-container">
      <div className="search-section">
        <h1>🎬 Movies</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies by title, genre, or director..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onSelect={() => onMovieSelect(movie)}
          />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="no-results">
          <p>No movies found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
