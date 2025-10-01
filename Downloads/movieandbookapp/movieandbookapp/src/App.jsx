import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import BookList from './Components/BookList';
import MovieDetails from './Components/MovieDetails';
import Chat from './Components/Chat';
import Profile from './Components/Profile';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [activeTab, setActiveTab] = useState('movies');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setActiveTab('movies');
    setSelectedMovie(null);
    setSelectedBook(null);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  const handleBackToBooks = () => {
    setSelectedBook(null);
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  if (!isAuthenticated) {
    return (
      <div className="App">
        {showSignup ? (
          <Signup 
            onSignup={handleSignup} 
            onSwitchToLogin={() => setShowSignup(false)} 
          />
        ) : (
          <Login 
            onLogin={handleLogin} 
            onSwitchToSignup={() => setShowSignup(true)} 
          />
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        user={user}
        onLogout={handleLogout}
      />
      
      <div className="main-content">
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={handleBackToMovies} />
        ) : selectedBook ? (
          <div>Book details coming soon...</div>
        ) : (
          <>
            {activeTab === 'movies' && (
              <MovieList onMovieSelect={handleMovieSelect} />
            )}
            {activeTab === 'books' && (
              <BookList onBookSelect={handleBookSelect} />
            )}
            {activeTab === 'chat' && <Chat />}
            {activeTab === 'profile' && <Profile user={user} onUserUpdate={handleUserUpdate} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
