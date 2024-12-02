import React from 'react';
import { Navigate } from 'react-router-dom';
import { getJWTFromCookies, isAdmin } from '../util/auth';

const AdminPage = () => {
    const token = getJWTFromCookies();

    if (!token || !isAdmin(token)) {
        // Redirect to login page if not an admin
        return <Navigate to="/login" replace />;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin! You have access to this page.</p>
        </div>
    );
};

export default AdminPage;
