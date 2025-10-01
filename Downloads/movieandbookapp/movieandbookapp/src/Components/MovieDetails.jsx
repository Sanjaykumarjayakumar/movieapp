import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, onBack }) => {
  if (!movie) return null;

  return (
    <div className="movie-details-container">
      <button onClick={onBack} className="back-button">
        ← Back to Movies
      </button>
      
      <div className="movie-details-content">
        <div className="movie-poster-section">
          <img src={movie.image} alt={movie.title} className="movie-poster" />
        </div>
        
        <div className="movie-info-section">
          <h1 className="movie-title">{movie.title}</h1>
          
          <div className="movie-meta">
            <div className="rating">
              <span className="rating-label">Rating:</span>
              <span className="rating-value">⭐ {movie.rating}/10</span>
            </div>
            
            <div className="year">
              <span className="year-label">Year:</span>
              <span className="year-value">{movie.year}</span>
            </div>
            
            <div className="duration">
              <span className="duration-label">Duration:</span>
              <span className="duration-value">{movie.duration}</span>
            </div>
          </div>
          
          <div className="genre-section">
            <h3>Genre</h3>
            <p>{movie.genre}</p>
          </div>
          
          <div className="director-section">
            <h3>Director</h3>
            <p>{movie.director}</p>
          </div>
          
          <div className="cast-section">
            <h3>Cast</h3>
            <div className="cast-list">
              {movie.cast.map((actor, index) => (
                <span key={index} className="cast-member">
                  {actor}
                </span>
              ))}
            </div>
          </div>
          
          <div className="description-section">
            <h3>About</h3>
            <p>{movie.description}</p>
          </div>
          
          <div className="where-to-watch-section">
            <h3>Where to Watch</h3>
            <div className="platforms">
              {movie.whereToWatch.map((platform, index) => (
                <span key={index} className="platform">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
