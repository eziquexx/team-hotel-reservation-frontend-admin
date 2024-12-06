import React from "react";
import { Navigate } from "react-router-dom";

// 쿠키에서 JWT 가져오기
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
};

// JWT 디코딩
const decodeJwt = (token) => {
    try {
        const base64Payload = token.split(".")[1]; // JWT의 payload 부분 추출
        const payload = atob(base64Payload); // Base64 디코딩
        const parsedPayload = JSON.parse(payload); // JSON 파싱
        console.log("Decoded JWT payload:", parsedPayload); // 디코딩 결과 출력
        return parsedPayload;
    } catch (e) {
        console.error("Invalid JWT:", e); // 디코딩 실패 시 오류 로그 출력
        return null;
    }
};

// PrivateRoute 컴포넌트
const PrivateRoute = ({ children }) => {
    const jwt = getCookie("jwt");
    console.log("JWT from cookie:", jwt);

    if (!jwt) {
        console.error("JWT is missing or invalid");
        return <Navigate to="/admin/login" replace />;
    }

    const decoded = decodeJwt(jwt);
    console.log("Decoded JWT:", decoded);

    if (!decoded || decoded.role !== "ADMIN") {
        console.error("Access denied: Role is not ADMIN");
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};


export default PrivateRoute;
