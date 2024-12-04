import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import AdminLoginPage from './pages/AdminLoginPage'; // Assume AdminLoginPage exists

//24.12.03 지은 [완료] : create-browser-router 적용
function App() {
  return <RouterProvider router={RouterObject} />;
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
