import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminBoardsContent from "../components/admin/boards/script/AdminBoardsContent";
import AdminMemberContent from "../components/admin/member/script/AdminMemberContent";
import AdminPaymentsContent from "../components/admin/payments/script/AdminPaymentsContent";
import AdminReservationContent from "../components/admin/reservation/script/AdminReservationContent";
import AdminRoomContent from "../components/admin/room/script/AdminRoomContent";
import AdminStaffContent from "../components/admin/staff/script/AdminStaffContent";
import AdminStatisticsContent from "../components/admin/statistics/script/AdminStatisticsContent";
import AdminPage from "../pages/AdminPage";
import AdminHomeContent from "../components/admin/adminHome/script/AdminHomeContent";
import AdminLoginPage from "../pages/AdminLoginPage";
import { jwtDecode } from "jwt-decode";

const ErrorPage = () => {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
  );
};

export const RouterInfo = [
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("JWT="))
          ?.split("=")[1];

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          // "ADMIN" 역할 및 토큰 만료 여부 확인
          if (decodedToken.role === "ADMIN" && Date.now() < decodedToken.exp * 1000) {
            return null; // ADMIN 역할이고 토큰이 유효하면 정상 진행
          } else {
            throw new Error("Unauthorized"); // ADMIN 역할이 아니거나 토큰이 만료된 경우 에러 발생
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          throw new Error("Invalid token"); // 토큰 디코딩 오류 발생
        }
      } else {
        throw new Error("Unauthorized"); // 토큰이 없으면 에러 발생
      }
    },
    children: [
      { index: true, element: <AdminHomeContent /> },
      { path: "member", element: <AdminMemberContent /> },
      { path: "staff", element: <AdminStaffContent /> },
      { path: "room", element: <AdminRoomContent /> },
      { path: "reservation", element: <AdminReservationContent /> },
      { path: "payments", element: <AdminPaymentsContent /> },
      { path: "boards", element: <AdminBoardsContent /> },
      { path: "statistics", element: <AdminStatisticsContent /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/admin/login" replace />,
  },
];

const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;