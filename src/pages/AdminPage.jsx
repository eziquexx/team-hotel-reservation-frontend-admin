
import AdminHeader from "../components/common/AdminHeader";
import AdminContents from "../components/common/AdminContents";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // jwt-decode 라이브러리

const AdminContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
};

// Helper function to check if user is admin
const isAdmin = (token) => {
    try {
        const decodedToken = jwtDecode(token); // 토큰 디코드
        return decodedToken.role === "ADMIN"; // 토큰에 "role"이 ADMIN인지 확인
    } catch (error) {
        console.error("Invalid token:", error);
        return false;
    }
};

export default function AdminPage() {
    // Retrieve token from cookies
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("JWT=")) // 쿠키 키를 JWT로 통일
        ?.split("=")[1]; // JWT 쿠키 값을 가져오기

    if (!token || !isAdmin(token)) {
        // Redirect to login page if not an admin
        return <Navigate to="/login" replace />;
    }

    return (
        <div style={AdminContainerStyle}>
            <AdminHeader />
            <AdminContents />
        </div>
    );
}
