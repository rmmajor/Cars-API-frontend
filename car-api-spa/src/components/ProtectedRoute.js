import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('accessToken') !== null;

    return isAuthenticated ? (
        <Route {...rest} component={<Component />} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default ProtectedRoute;
