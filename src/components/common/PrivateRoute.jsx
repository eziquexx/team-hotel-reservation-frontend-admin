import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/admin/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // 쿠키를 요청에 포함
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.role === "ADMIN") {
                        setIsAuthenticated(true);
                    } else {
                        setError("Unauthorized");
                        setIsAuthenticated(false);
                    }
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || "Authentication check failed");
                    setIsAuthenticated(false);
                }
            } catch (e) {
                console.error("Error during auth check:", e);
                setError("Error during authentication check");
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;