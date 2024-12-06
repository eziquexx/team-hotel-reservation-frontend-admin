import Table from "react-bootstrap/Table";

export default function AdminPaymentTable({ data, loading }) {
  if (loading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;
  
  return (
    <div className="table-height-fixed">
      <Table
        responsive="xl"
        border={1}
        className="table-hover table-bordered text-center"
      >
        <thead className="table-light">
          <tr>
            <th>결제ID</th>
            <th>예약ID</th>
            <th>회원ID</th>
            <th>회원이름</th>
            <th>결제방식</th>
            <th>결제상태</th>
            <th>총금액</th>
            <th>생성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item) => (
            <tr key={item.paymentId}>
              <td>{item.paymentId}</td>
              <td>{item.reservationId}</td>
              <td>{item.memberId}</td>
              <td>{item.memberName}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.amount}</td>
              <td>{formatDate(item.createdAt)}</td>
              <td>{formatDate(item.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
  return formattedDate;
}
