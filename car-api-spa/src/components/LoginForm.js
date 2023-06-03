import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form">
            <h1>Login Form</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" /><br />

                <button type="button" className="ok" onClick={() => window.location.href='cars.html'}>
                    Log in
                </button>
                <button type="button" className="cancel" onClick="location.href='register_or_login.html'">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
