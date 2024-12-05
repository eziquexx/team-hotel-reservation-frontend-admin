import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
    const [staffUserId, setStaffUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // 쿠키 포함
                body: JSON.stringify({ staffUserId, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const { token, role } = data;

                if (role === "ADMIN") {
                    localStorage.setItem("authToken", token); // 토큰 저장
                    navigate("/admin"); // 관리자 페이지로 리다이렉트
                } else {
                    setError("You are not authorized to access this page.");
                }
            } else {
                setError("Invalid credentials.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h1>Admin Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Staff User ID:</label>
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
