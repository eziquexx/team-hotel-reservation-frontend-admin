import AdminPaymentPagination from "./AdminPaymentPagination";
import AdminPaymentTable from "./AdminPaymentTable";
import "../css/AdminPaymentsContent.css";
import { useEffect, useState } from "react";

// AdminMemberContent
export default function AdminPaymentsContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/payments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No reservation data available.</div>;

  return (
    <div>
      <h5>결제내역 목록</h5>
      <div>
        <AdminPaymentTable data={data} />
        <AdminPaymentPagination />
      </div>
    </div>
  );
}
