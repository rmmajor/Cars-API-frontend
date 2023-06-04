import React from 'react';
import { Link, Route, useNavigate} from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const SignOptions = () => {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="sign-options">
            <h1>Welcome!</h1>
            <div className="instance-details" id="model-details-1">
                <p>Please select one of the following options:</p>
                <button type="button" className="ok" onClick={handleRegisterClick}>
                    Register
                </button>
                <button type="button" className="cancel" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignOptions;
