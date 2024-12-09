import { Spinner } from "react-bootstrap";
import AdminBoardsPaginavigation from "./AdminBoardsPagination";
import AdminNoticeTable from "./AdminNoticeTable";
import usePaginationFetch from "./usePaginationFetch";

// AdminHomeContent
export default function AdminNoticeList() {
  const urlTest = `notices`; // usePaginationFetch함수로 해당 글자 전달
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
      <h5 className="contentTitle">공지사항 목록</h5>
      <div className="contentTable">
          <AdminNoticeTable data={data} loading={loading} />
          <AdminBoardsPaginavigation
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
