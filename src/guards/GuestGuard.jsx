import React from 'react'
import { UseAuthentication } from '../hooks/UseAuthentication'
import { Navigate } from 'react-router-dom';

const GuestGuard = ({ children }) => {
    const { state } = UseAuthentication();
    const isAuthenticated = state.isAuthenticated;
    if (isAuthenticated) {
        return <Navigate to="/home" />
    }
    return children;
}

export default GuestGuard