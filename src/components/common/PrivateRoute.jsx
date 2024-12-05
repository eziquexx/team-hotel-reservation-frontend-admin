import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("authToken"); // 인증 토큰 확인

    if (!token) {
        // 인증되지 않은 경우 로그인 페이지로 리다이렉트
        return <Navigate to="/admin/login" replace />;
    }

    return children; // 인증된 경우 children 렌더링
};

export default PrivateRoute;
