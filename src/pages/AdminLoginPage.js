import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/common/css/AdminLoginPage.css";

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
                const { role } = data; // role만 필요함

                if (role === "ADMIN") {
                    // 쿠키는 서버에서 설정되므로 따로 저장하지 않음
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
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">HJ HOTEL <br/>관리자 로그인</h1>
                {error && <p className="login-error">{error}</p>}
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label className="login-label">ID:</label>
                        <input
                            type="text"
                            value={staffUserId}
                            onChange={(e) => setStaffUserId(e.target.value)}
                            className="login-input"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="login-label">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};


export default AdminLoginPage;
