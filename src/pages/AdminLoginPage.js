import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie'; // js-cookie 라이브러리 추가
import "../components/common/css/AdminLoginPage.css";

const AdminLoginPage = () => {
    const [staffUserId, setStaffUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ staffUserId, password }),
            });

            if (response.ok) {
                const data = await response.json();

                // 응답에서 토큰 추출
                const token = data.token;

                // 토큰이 있는지 확인
                if (!token) {
                    setError("Token not found in response.");
                    return;
                }

                // 토큰을 쿠키에 저장 (만료 시간 설정)
                Cookies.set('JWT', token, { expires: 1, path: '/' }); // 1일 후 만료

                // 관리자 여부 확인
                if (data.role === "ADMIN") {
                    // 로그인 성공 후 이전 경로로 리디렉션하거나, 기본 경로로 이동
                    const from = location.state?.from?.pathname || "/admin";
                    navigate(from, { replace: true });
                } else {
                    setError("You are not authorized to access this page.");
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid credentials.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">HJ HOTEL <br />관리자 로그인</h1>
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