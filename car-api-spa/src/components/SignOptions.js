import React from 'react';

const SignOptions = () => {
    return (
        <div className="sign-options">
            <h1>Welcome!</h1>
            <div className="instance-details" id="model-details-1">
                <p>Please select one of the following options:</p>
                <button type="button" className="register" onClick={() => window.location.href='register.html'}>
                    Register
                </button>
                <button type="button" className="cancel" onClick={() => window.location.href='login.html'}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignOptions;
