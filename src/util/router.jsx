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

//24.12.03 지은 [완료] : create-browser-router 적용
export const RouterInfo = [
  {
    path: "/admin",
    element: <AdminPage />,
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
