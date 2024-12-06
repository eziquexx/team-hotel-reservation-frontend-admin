import AdminPaymentPaginavigation from "./AdminPaymentPaginavigation";
import AdminPaymentTable from "./AdminPaymentTable";
import usePaginationFetch from "./usePaginationFetch";

// 24.12.06 지은 : 결제내역 pagination 기능 fin.
export default function AdminPaymentsList() {
    const urlTest = `payments`; // usePaginationFetch함수로 해당 글자 전달
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No reservation data available.</div>;

    return (
        <>
            <h5 className="contentTitle">결제내역 목록</h5>
            <div className="contentTable">
                <AdminPaymentTable data={data} loading={loading} />
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