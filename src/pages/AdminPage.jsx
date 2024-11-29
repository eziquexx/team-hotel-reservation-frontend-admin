import "bootstrap/dist/css/bootstrap.min.css";
import AdminContents from "../components/common/AdminContents";
import AdminHeader from "../components/common/AdminHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminMemberContent from "../components/admin/member/script/AdminMemberContent"

const AdminContainerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

//24.11.25 지은 [완료] : 관리자 페이지 경로 테스트.
export default function AdminPage() {
  return (
    <div style={AdminContainerStyle}>
      <AdminHeader />

        <Routes>

            <Route path="/members" element={<AdminMemberContent />} /> {/* 회원 관리 */}

        </Routes>

      <AdminContents />
    </div>
  );
}
