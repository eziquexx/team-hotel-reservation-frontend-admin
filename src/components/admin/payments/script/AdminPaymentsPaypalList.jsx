import { Spinner } from "react-bootstrap";
import AdminPaymentPaginavigation from "./AdminPaymentPaginavigation";
import AdminPaymentPaypalTable from "./AdminPaymentPaypalTable";
import usePaginationFetch from "./usePaginationFetch";

// 24.12.06 지은 : PayPal 주문내역 pagination 기능 fin.
export default function AdminPaymentsPaypalList() {
    const urlTest = `payments/paypalOrders`;
    const {
      data,
      loading,
      error,
      totalPages,
      totalElements,
      page,
      setPage,
      size,
    } = usePaginationFetch(urlTest);

    if (loading) return (
        <div>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            /> Loading...
        </div>
    );
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No reservation data available.</div>;

    return (
        <>
            <h5 className="contentTitle">PayPal 주문내역 목록</h5>
            <div className="contentTable">
                <AdminPaymentPaypalTable data={data} loading={loading} />
                <AdminPaymentPaginavigation
                    page={page}
                    totalElements={totalElements}
                    totalPages={totalPages}
                    size={size}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            </div>
        </>
    );
}