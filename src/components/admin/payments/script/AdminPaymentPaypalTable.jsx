
import Table from "react-bootstrap/Table";

export default function AdminPaymentPaypalTable() {  
 
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
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}