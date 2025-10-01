import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div className="movie-card" onClick={onSelect}>
      <div className="movie-image-container">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <div className="movie-rating">
          ⭐ {movie.rating}
        </div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-director">Director: {movie.director}</p>
        
        <button className="details-button">
          More Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;