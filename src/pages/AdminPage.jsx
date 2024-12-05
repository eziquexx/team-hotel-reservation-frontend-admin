import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // 토큰 삭제
        window.location.href = "/admin/login"; // 로그인 페이지로 리다이렉트
    };

    return (
        <div className="d-flex vh-100">
            {/* 사이드바 */}
            <aside className="bg-light p-3" style={{ width: "200px" }}>
                <h5 className="text-center mb-4">Admin Menu</h5>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/admin" end className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/member" className="nav-link">
                                Members
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/staff" className="nav-link">
                                Staff
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/room" className="nav-link">
                                Rooms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/statistics" className="nav-link">
                                Statistics
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/reservation" className="nav-link">
                                Reservations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/payments" className="nav-link">
                                Payments
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/boards" className="nav-link">
                                Boards
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn-danger w-100 mt-4" onClick={handleLogout}>
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
