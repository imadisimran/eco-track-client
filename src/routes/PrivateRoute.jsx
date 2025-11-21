import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <Loader></Loader>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;