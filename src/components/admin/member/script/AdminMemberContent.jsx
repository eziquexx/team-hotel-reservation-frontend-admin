import Table from 'react-bootstrap/Table';


export default function AdminMemberContent() {
    return (
        <div>
            <h1>회원관리</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>결제ID</th>
                    <th>예약ID</th>
                    <th>회원ID</th>
                    <th>회원이름</th>
                    <th>결젤방식</th>
                    <th>결제금액</th>
                    <th>결제날짜</th>
                    <th>결제변경날짜</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>존 도우</td>
                    <td>PAYAPL</td>
                    <td>COMPLETED</td>
                    <td>200000.00</td>
                    <td>2024-11-21T12:46:24</td>
                    <td>2024-11-23T13:04:42</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>제인 도우</td>
                    <td>PAYAPL</td>
                    <td>COMPLETED</td>
                    <td>300000.00</td>
                    <td>2024-11-21T12:46:24</td>
                    <td>2024-11-21T12:46:24</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>마이크 존슨</td>
                    <td>PAYAPL</td>
                    <td>COMPLETED</td>
                    <td>500000.00</td>
                    <td>2024-11-21T12:46:24</td>
                    <td>2024-11-23T15:27:01</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}
