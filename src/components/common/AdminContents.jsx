import AdminAside from "./AdminAside";
import AdminMain from "./AdminMain";
import "./css/AdminContents.css";

//24.11.25 지은 [완료] : AdminContents 작업
export default function AdminContents() {
  return (
    <div id="AdminContentsContainer">
      <AdminAside />
      <AdminMain />
    </div>
  );
}
