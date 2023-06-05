import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch user profile data from the backend endpoint
        if (localStorage.getItem('accessToken') == null) {
            navigate('/');
        }

        fetch('http://127.0.0.1:8000/user/profile/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                // Save the received data in local storage
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email);
                setEmail(data.email); // Set the email value in the state
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

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
                <span>{localStorage.getItem('username')}</span>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <span>********</span>
            </div>
            {email && ( // Only render the email field if email has a value
                <div>
                    <label htmlFor="email">Email address:</label>
                    <span>{email}</span>
                </div>
            )}
            <button className="edit-profile-button" onClick={handleEditProfile}>
                Edit
            </button>
        </div>
    );
};

export default UserProfile;
