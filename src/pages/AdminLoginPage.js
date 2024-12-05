import React, { useState } from "react";

const AdminLoginPage = () => {
    const [staffUserId, setStaffUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(''); // Clear existing error

        try {
            const response = await fetch('http://localhost:8080/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // 쿠키 포함 설정
                body: JSON.stringify({ staffUserId, password }),
            });

            if (response.ok) {
                const data = await response.json();
                window.location.href = '/admin'; // Redirect to admin page
            } else {
                setError('Invalid ID or password.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h1>Admin Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Staff ID:</label>
                    <input
                        type="text"
                        value={staffUserId}
                        onChange={(e) => setStaffUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
