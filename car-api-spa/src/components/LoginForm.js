import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            const response = await fetch('http://127.0.0.1:8000/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                const { access, refresh } = await response.json();

                // Store the tokens in local storage or state
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                localStorage.setItem('username', username);

                // Clear the form inputs
                setUsername('');
                setPassword('');

                navigate('/cars'); // Redirect to the main page
            } else {
                throw new Error('Invalid username or password');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="login-form" data-testid="login-form">
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
