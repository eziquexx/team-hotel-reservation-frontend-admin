import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdminAccess = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/admin/me", {
                    method: "GET",
                    credentials: "include", // HttpOnly 쿠키 포함
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.role === "ADMIN") {
                        setAuthorized(true); // 권한 확인 성공
                    } else {
                        throw new Error("Unauthorized access");
                    }
                } else {
                    throw new Error("Unauthorized access");
                }
            } catch (err) {
                console.error(err.message);
                navigate("/"); // 로그인 페이지로 리디렉션
            }
        };

        checkAdminAccess();
    }, [navigate]);

    if (!authorized) {
        return <div>Loading...</div>;
    }

    return <div>관리자 페이지에 접속하였습니다.</div>;
};

export default AdminPage;
