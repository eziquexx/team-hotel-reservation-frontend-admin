import AdminPaymentPagination from "./AdminPaymentPagination";
import AdminPaymentTable from "./AdminPaymentTable";
import "../css/AdminPaymentsContent.css";
import { useEffect, useState } from "react";

// AdminMemberContent
export default function AdminPaymentsContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0); // 총 페이지 개수
  const [page, setPage] = useState(1); // 현재 페이지
  const size = 10; // 한 페이지에 표시할 항목 개수

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8080/api/payments?page=${page}&size=${size}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.content);
        setTotalElements(result.totalElements); // 총 데이터 개수 저장
        setTotalPages(result.totalPages);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  console.log("가져온 값" , data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No reservation data available.</div>;

  return (
    <div id="adminPaymentContent">
      <h5 className="contentTitle">결제내역 목록</h5>
      <div className="contentTable">
        <AdminPaymentTable data={data} loading={loading} />
        <AdminPaymentPagination
          page={page}
          totalElements={totalElements}
          totalPages={totalPages}
          size={size}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
