import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token'); // Get the token from local storage or state

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export default ProtectedRoute;
