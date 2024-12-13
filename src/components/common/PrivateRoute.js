import React from 'react';
import { Navigate } from 'react-router-dom';
// import useAuthStore from '../../state/authStore';

const PrivateRoute = ({ children, requiredRole }) => {
    // const { token, role } = useAuthStore();

    // if (!token) {
    //     // 인증되지 않은 사용자
    //     return <Navigate to="/login" />;
    // }
    //
    // if (requiredRole && role !== requiredRole) {
    //     // 역할이 맞지 않으면 접근 제한
    //     return <Navigate to="/unauthorized" />;
    // }

    return children; // 인증 및 인가가 성공한 경우 렌더링
};

export default PrivateRoute;
