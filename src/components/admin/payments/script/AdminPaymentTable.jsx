import Table from 'react-bootstrap/Table';

export default function AdminPaymentTable() {
  return (
    <>
      <Table 
        responsive="xl" 
        border={1}
        className='table-hover table-bordered text-center'
      >
        <thead className='table-light'>
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
        <tbody className='table-group-divider'>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}