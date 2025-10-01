import React, { useState, useRef } from 'react';
import './Profile.css';

const Profile = ({ user, onUserUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: editedUser.name,
      email: editedUser.email,
      profileImage: imagePreview || user?.profileImage
    };
    
    // Update localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Notify parent component
    if (onUserUpdate) {
      onUserUpdate(updatedUser);
    }
    
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || '',
      email: user?.email || ''
    });
    setImagePreview(null);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const getDisplayName = () => {
    return editedUser.name || user?.name || 'User Name';
  };

  const getDisplayEmail = () => {
    return editedUser.email || user?.email || 'user@example.com';
  };

  const getAvatarDisplay = () => {
    if (imagePreview || user?.profileImage) {
      return (
        <img 
          src={imagePreview || user?.profileImage} 
          alt="Profile" 
          className="avatar-image"
        />
      );
    }
    return (
      <div className="avatar-circle">
        {getDisplayName().charAt(0)?.toUpperCase() || 'U'}
      </div>
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>👤 User Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar" onClick={isEditing ? handleImageClick : undefined}>
            {getAvatarDisplay()}
            {isEditing && (
              <div className="edit-overlay">
                <span>📷</span>
                <p>Change Photo</p>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          
          <div className="profile-info">
            {isEditing ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                  className="edit-input"
                  placeholder="Enter your email"
                />
              </div>
            ) : (
              <>
                <h2>{getDisplayName()}</h2>
                <p className="profile-email">{getDisplayEmail()}</p>
                <p className="profile-member">Member since: {new Date().toLocaleDateString()}</p>
              </>
            )}
            
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="save-btn">
                    💾 Save
                  </button>
                  <button onClick={handleCancel} className="cancel-btn">
                    ❌ Cancel
                  </button>
                </>
              ) : (
                <button onClick={handleEdit} className="edit-btn">
                  ✏️ Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-card">
            <h3>🎬 Movies Watched</h3>
            <p className="stat-number">24</p>
          </div>
          
          <div className="stat-card">
            <h3>📚 Books Read</h3>
            <p className="stat-number">12</p>
          </div>
          
          <div className="stat-card">
            <h3>⭐ Average Rating</h3>
            <p className="stat-number">4.2</p>
          </div>
        </div>
        
        <div className="profile-favorites">
          <h3>Favorites</h3>
          <div className="favorites-grid">
            <div className="favorite-item">
              <h4>Favorite Genre</h4>
              <p>Sci-Fi & Fantasy</p>
            </div>
            <div className="favorite-item">
              <h4>Favorite Movie</h4>
              <p>Inception</p>
            </div>
            <div className="favorite-item">
              <h4>Favorite Book</h4>
              <p>1984</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
