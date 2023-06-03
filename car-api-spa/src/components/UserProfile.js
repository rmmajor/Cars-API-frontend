import React from 'react';

const UserProfile = ({ username, password, email }) => {
    const handleEditProfile = () => {
        // Logic for handling the edit profile action
        // For example, navigate to the profile form page
        // using React Router or update the state to display the form
    };

    return (
        <div className="profile" id="user-profile">
            <h2>Your Profile</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <span>{username}</span>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <span>{password}</span>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <span>{email}</span>
            </div>
            <button className="edit-profile-button" onClick={handleEditProfile}>
                Edit
            </button>
        </div>
    );
};

export default UserProfile;