import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import AdminLoginPage from './pages/AdminLoginPage'; // Assume AdminLoginPage exists

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
