import { Routes, Route } from "react-router-dom";
import AdminHomeContent from "../admin/adminHome/script/AdminHomeContent";
import AdminMemberContent from "../admin/member/script/AdminMemberContent";
import AdminStaffContent from "../admin/staff/script/AdminStaffContent";
import AdminRoomContent from "../admin/room/script/AdminRoomContent";
import AdminReservationContent from "../admin/reservation/script/AdminReservationContent";
import AdminPaymentsContent from "../admin/payments/script/AdminPaymentsContent";
import AdminBoardsContent from "../admin/boards/script/AdminBoardsContent";
import AdminStatisticsContent from "../admin/statistics/script/AdminStatisticsContent";
import "./css/AdminMain.css";

//24.11.25 지은 [완료] : AdminMain 작업
export default function AdminMain() {
  return (
    <div id="AdminMainConatainer">
      <div id="AdminMainContentsContainer">
        <div id="AdminMainContentsWrap">
          <Routes>
            <Route index element={<AdminHomeContent />} />
            <Route path="member" element={<AdminMemberContent />} />
            <Route path="staff" element={<AdminStaffContent />} />
            <Route path="room" element={<AdminRoomContent />} />
            <Route path="reservation" element={<AdminReservationContent />} />
            <Route path="payments" element={<AdminPaymentsContent />} />
            <Route path="boards" element={<AdminBoardsContent />} />
            <Route path="statistics" element={<AdminStatisticsContent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
