import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// PrivateRoute는 더 이상 사용되지 않으므로 빈 컴포넌트로 변경
const PrivateRoute = ({ children }) => {
    return <>{children}</>;
};

export default PrivateRoute;