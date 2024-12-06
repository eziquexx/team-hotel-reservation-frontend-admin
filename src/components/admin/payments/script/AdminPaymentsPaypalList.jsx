import AdminPaymentPaypalPagination from "./AdminPaymentPaypalPagination";
import AdminPaymentPaypalTable from "./AdminPaymentPaypalTable";

export default function AdminPaymentsPaypalList() {
    return (
        <>
            <h5 className="contentTitle">PAYPAL주문내역 목록</h5>
            <div className="contentTable">
                <AdminPaymentPaypalTable/>
                <AdminPaymentPaypalPagination/>
            </div>
        </>
    );
}