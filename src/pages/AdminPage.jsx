import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminPage = () => {
    const navigate = useNavigate();

    // 인증 상태 확인
    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch("http://localhost:8080/api/admin/me", {
                credentials: "include", // 쿠키 포함
            });
            if (!response.ok) {
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
        <div className="d-flex vh-100">
            {/* 사이드바 */}
            <aside className="bg-light p-3" style={{ width: "200px", overflowY: "auto" }}>
                <h5 className="text-center mb-4">Admin Menu</h5>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/admin" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/member" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Members
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/staff" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Staff
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/room" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Rooms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/statistics" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Statistics
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/reservation" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Reservations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/payments" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Payments
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/boards" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Boards
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn-outline-danger w-100 mt-4" onClick={handleLogout}>
                    Logout
                </button>
            </aside>

            {/* 콘텐츠 영역 */}
            <main className="flex-grow-1 p-4">
                <Outlet /> {/* 하위 경로 컴포넌트 렌더링 */}
            </main>
        </div>
    );
};

export default AdminPage;
