import AdminPaymentPagination from "./AdminPaymentPagination";
import AdminPaymentTable from "./AdminPaymentTable";
import "../css/AdminPaymentsContent.css";

// AdminMemberContent
export default function AdminPaymentsContent() {
  return (
    <div>
      <h5>결제관리</h5>
      <div>
        <AdminPaymentTable />
        <AdminPaymentPagination />
      </div>
    </div>
  );
}
