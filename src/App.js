import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
