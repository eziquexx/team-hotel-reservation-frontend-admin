import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "../components/common/AdminHeader";
import AdminContents from "../components/common/AdminContents";

const AdminContainerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

//24.12.03 지은 [완료] : create-browser-router 적용을 하면서 경로 수정
export default function AdminPage() {
  return (
    <div style={AdminContainerStyle}>
      <AdminHeader />
      <AdminContents />
    </div>
  );
}
