import AdminPaymentPagination from "./AdminPaymentPagination";
import AdminPaymentTable from "./AdminPaymentTable";
import "../css/AdminPaymentsContent.css";
import { useEffect, useState } from "react";

// AdminMemberContent
export default function AdminPaymentsContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0); // 총 데이터 개수
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsPerPage = 10; // 한 페이지에 표시할 항목 개수

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8080/api/payments?page=${page}&limit=${itemsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
        setTotalItems(result.total); // 총 데이터 개수 저장
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No reservation data available.</div>;

  return (
    <div>
      <h5>결제내역 목록</h5>
      <div>
        <AdminPaymentTable data={data} loading={loading} />
        <AdminPaymentPagination
          page={page}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
