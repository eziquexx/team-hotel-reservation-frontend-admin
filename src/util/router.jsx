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
import PrivateRoute from "../components/common/PrivateRoute"; // PrivateRoute 추가
import AdminLoginPage from "../pages/AdminLoginPage";


export const RouterInfo = [

  {
    path: "/admin/login", // 로그인 페이지 경로 추가
    element: <AdminLoginPage />,
  },
    {
    path: "/admin",
    element: (
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
    ),
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
