import AdminAside from "./AdminAside";
import AdminMain from "./AdminMain";
import "./css/AdminContents.css";

export default function AdminContents() {
  return (
    <div id="AdminContentsContainer">
      <AdminAside />
      <AdminMain />
    </div>
  );
}
