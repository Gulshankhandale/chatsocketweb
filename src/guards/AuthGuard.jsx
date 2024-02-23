import React from 'react'
import { UseAuthentication } from '../hooks/UseAuthentication';
import { Navigate } from 'react-router-dom';

const AuthGuard = () => {
    const { state } = UseAuthentication();
    const isAuthenticated = state.isAuthenticated;
    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />
    }
    return children;
}

export default AuthGuard;