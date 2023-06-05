import React from 'react';
import {useNavigate} from "react-router-dom";

const AreYouSureLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove tokens from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');

        navigate('/');
    };

    const handleCancelClick = () => {
        navigate(-1); // Go back to the previous page
    }

    return (
        <div className="are-you-sure-log-out">
            <h1>Are you sure you want to log out?</h1>
            <div className="instance-details" id="model-details-1">
                <p>Please select one of the following options:</p>
                <button type="button" className="register" onClick={handleLogout}>
                    Log out
                </button>
                <button type="button" className="cancel" onClick={handleCancelClick}>
                    Cancel
                </button>
            </div>
        </div>
    );

};

export default AreYouSureLogout;
