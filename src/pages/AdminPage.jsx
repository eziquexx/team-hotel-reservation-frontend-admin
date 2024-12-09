import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import AdminHeader from "../components/common/AdminHeader";
import AdminContents from "../components/common/AdminContents";

//24.12.03 지은 [수정 필요] : 기존 AdminHeader와 AdminContents를 통합한 새로운 구조로 적용
const AdminPage = () => {
    const navigate = useNavigate();


    const AdminContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
};


    // 인증 상태 확인
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/admin/me", {
                    credentials: "include", // 쿠키 포함
                });
                if (!response.ok) {
                    navigate("/admin/login");
                }
            } catch (error) {
                console.error("Failed to check authentication:", error);
                navigate("/admin/login");
            }
        };
        checkAuth();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:8080/api/admin/logout", {
                method: "POST",
                credentials: "include",
            });
            window.location.href = "/admin/login";
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div style={AdminContainerStyle}>
            <AdminHeader/>
             <AdminContents/>
             </div>
    );
};

export default AdminPage;


//////////////////////////////////////////////////////////////////

// import "bootstrap/dist/css/bootstrap.min.css";
// import AdminHeader from "../components/common/AdminHeader";
// import AdminContents from "../components/common/AdminContents";
//
// const AdminContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     height: "100vh",
// };
//
// //24.12.03 지은 [완료] : create-browser-router 적용을 하면서 경로 수정
// export default function AdminPage() {
//     return (
//         <div style={AdminContainerStyle}>
//             <AdminHeader />
//             <AdminContents />
//         </div>
//     );
// }