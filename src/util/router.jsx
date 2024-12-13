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
import AdminPaymentsList from "../components/admin/payments/script/AdminPaymentsList";
import AdminPaymentsPaypalList from "../components/admin/payments/script/AdminPaymentsPaypalList";
import AdminLoginPage from "../pages/AdminLoginPage";

import PrivateRoute from "../components/common/PrivateRoute";

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
    element: (
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
    ),
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
            return decodedToken.userId ? decodedToken.userId : decodedToken.staffUserId;
          } else {
            // ADMIN 역할이 아니거나 토큰이 만료된 경우 리디렉션
            return redirect("/admin/login");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          // 토큰 디코딩 오류 발생 시 리디렉션
          return redirect("/admin/login");
        }
      } else {
        // 토큰이 없으면 리디렉션
        return redirect("/admin/login");
      }
    },
    children: [
      {
        index: true,
        element: <AdminHomeContent />,
      },
      {
        path: "member",
        element: <AdminMemberContent />,
      },
      {
        path: "staff",
        element: <AdminStaffContent />,
      },
      {
        path: "room",
        element: <AdminRoomContent />,
      },
      {
        path: "reservation",
        element: <AdminReservationContent />,
      },
      {
        path: "payments",
        element: <AdminPaymentsContent />,
        children: [
          {
            path:"",
            element: <AdminPaymentsList />,
          },
          {
            path:"paypal",
            element: <AdminPaymentsPaypalList />,
          }
        ]
      },
      {
        path: "boards",
        element: <AdminBoardsContent />,
      },
      {
        path: "statistics",
        element: <AdminStatisticsContent />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/admin/login" replace />,
  },
];

const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;