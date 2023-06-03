import React from 'react';

const RegistrationForm = () => {
    return (
        <div className="registration-form">
            <h1>Registration Form</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" /><br />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" /><br />

                <div className="button-container">
                    <button type="button" onClick={() => window.location.href='register_or_login.html'} className="cancel">Cancel</button>
                    <button type="button" onClick={() => window.location.href='cars.html'} className="ok">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
