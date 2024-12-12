import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../components/common/AdminHeader";
import AdminContents from "../components/common/AdminContents";

const AdminPage = () => {
    const navigate = useNavigate();

    const AdminContainerStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    };

    // useEffect 및 checkAuth 함수 제거

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:8080/api/admin/logout", {
                method: "POST",
                credentials: "include",
            });
            navigate("/admin/login"); // navigate 사용
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div style={AdminContainerStyle}>
            <AdminHeader onLogout={handleLogout} /> {/* 로그아웃 핸들러 전달 */}
            <AdminContents />
        </div>
    );
};

export default AdminPage;