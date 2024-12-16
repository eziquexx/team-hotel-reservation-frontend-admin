import { Outlet } from "react-router-dom";
import "../css/AdminBoardsContent.css";

// AdminMemberContent
export default function AdminBoardsContent() {
  return (
    <div id="adminBoardsContent">
      <Outlet />
    </div>
  );
}