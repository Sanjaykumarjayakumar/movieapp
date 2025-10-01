import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, onTabChange, user, onLogout }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileSelect = () => {
    onTabChange('profile');
    setShowProfileDropdown(false);
  };

  const handleLogout = () => {
    onLogout();
    setShowProfileDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>MovieBook Hub</h2>
      </div>
      
      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'movies' ? 'active' : ''}`}
          onClick={() => onTabChange('movies')}
        >
          🎬 Movies
        </button>
        <button 
          className={`nav-tab ${activeTab === 'books' ? 'active' : ''}`}
          onClick={() => onTabChange('books')}
        >
          📚 Books
        </button>
        <button 
          className={`nav-tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => onTabChange('chat')}
        >
          💬 Chat
        </button>
      </div>
      
      <div className="nav-user">
        <span>Welcome, {user?.name || user?.email?.split('@')[0] || 'User'}</span>
        <div className="profile-dropdown" ref={dropdownRef}>
          <button onClick={handleProfileClick} className="profile-btn">
            <div className="profile-avatar-small">
              {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
            </div>
          </button>
          
          {showProfileDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleProfileSelect} className="dropdown-item">
                👤 Your Profile
              </button>
              <button onClick={handleLogout} className="dropdown-item logout-item">
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
