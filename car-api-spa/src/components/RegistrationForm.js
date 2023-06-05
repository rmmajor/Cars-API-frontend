import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = message => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmed_password: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleCancelClick = () => {
        navigate('/');
    };

    const handleRegisterClick = () => {
        fetch('http://127.0.0.1:8000/user/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response)
                    // const { refresh, access } = response.data;
                    // localStorage.setItem('refreshToken', refresh);
                    // localStorage.setItem('accessToken', access);
                    // localStorage.setItem('username', formData.username);
                    // localStorage.setItem('email', formData.email);

                    navigate('/login');
                } else {
                    // Registration failed, handle error (display error message, etc.)
                    return response.json().then(data => {
                        let errorMessage = 'Registration failed';

                        // Check if the response contains validation errors
                        if (data && typeof data === 'object') {
                            const errorKeys = Object.keys(data);
                            if (errorKeys.length > 0) {
                                // Construct error message from validation comments
                                errorMessage = errorKeys.map(key => `${key}: ${data[key][0]}`).join('\n');
                            }
                        }

                        throw new Error(errorMessage);
                    });
                }
            })
            .catch(error => {
                // console.error('Error registering user:', error);
                // Handle error (display error message, etc.)
                alert(error.message);
            });
    };

    return (
        <div className="registration-form">
            <h1>Registration Form</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm_password"
                    name="confirmed_password"
                    value={formData.confirmed_password}
                    onChange={handleInputChange}
                />
                <br />

                <div className="button-container">
                    <button type="button" className="cancel" onClick={handleCancelClick}>
                        Cancel
                    </button>
                    <button type="button" className="ok" onClick={handleRegisterClick}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
