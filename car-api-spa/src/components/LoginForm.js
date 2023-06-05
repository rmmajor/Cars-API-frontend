import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/', {
                username,
                password,
            });
            const { access, refresh } = response.data;

            // Store the tokens in local storage or state
            // console.log('access', access);
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            localStorage.setItem('username', username);

            // console.log('access in storage', localStorage.getItem('accessToken'));

            // Clear the form inputs
            setUsername('');
            setPassword('');

            navigate('/cars'); // Redirect to the main page
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-form">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <button type="button" className="cancel" onClick={handleCancelClick}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
