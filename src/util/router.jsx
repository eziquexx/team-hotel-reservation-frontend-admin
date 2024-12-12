import { createBrowserRouter } from "react-router-dom";
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
import PrivateRoute from "../components/common/PrivateRoute";
import AdminLoginPage from "../pages/AdminLoginPage";

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
    errorElement: <ErrorPage />, // 에러 페이지 추가
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
];

const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;
