import { Outlet } from "react-router-dom";
import "../css/AdminPaymentsContent.css";

// AdminMemberContent
export default function AdminPaymentsContent() {
  return (
    <div id="adminPaymentContent">
      <Outlet />
    </div>
  );
}
