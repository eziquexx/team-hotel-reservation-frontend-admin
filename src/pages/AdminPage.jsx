import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../components/common/AdminHeader";
import AdminContents from "../components/common/AdminContents";
import Cookies from 'js-cookie';

const AdminPage = () => {
    const navigate = useNavigate();

    const AdminContainerStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/admin/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                // 서버에서 로그아웃 성공 시, 클라이언트 쿠키 삭제
                Cookies.remove('JWT');
                navigate("/admin/login");
            } else {
                // 서버에서 로그아웃 실패 시, 에러 처리
                const errorData = await response.json();
                console.error("Logout failed:", errorData.message || "Unknown error");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div style={AdminContainerStyle}>
            <AdminHeader onLogout={handleLogout} /> {/* 로그아웃 핸들러 전달 */}

            <Outlet />
        </div>
    );
};

export default AdminPage;