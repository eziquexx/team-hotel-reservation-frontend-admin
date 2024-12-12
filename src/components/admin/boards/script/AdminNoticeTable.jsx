import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// 24.12.06 지은 : 결제내역 테이블 fin. 상세내역 모달창 작업 fin.
export default function AdminNoticeTable({ data, loading }) {  
  const [ notices, setNotices ] = useState([]);
  const navigate = useNavigate();

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
  if (!data || data.length === 0) return <p>No data available.</p>;

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
    return formattedDate;
  }

  // 게시글 클릭시 상세 페이지로 이동
  const handleNoticeClick = (noticeId) => {
    navigate(`/admin/boards/${noticeId}`);
  }


  return (
    <div className="table-height-fixed">
      <Table
        responsive="xl"
        border={1}
        className="table-hover table-bordered text-center"
      >
        <thead className="table-light">
          <tr>
            <th style={{width:"80px"}}>ID</th>
            <th style={{width:"560px"}}>제목</th>
            <th style={{width:"100px"}}>카테고리</th>
            <th style={{width:"70px"}}>중요도</th>
            <th style={{width:"90px"}}>조회수</th>
            <th style={{width:"170px"}}>생성일</th>
            <th style={{width:"170px"}}>수정일</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item) => (
            <tr 
              key={item.noticeId}
              onClick={() => handleNoticeClick(item.noticeId)}
              style={{ cursor: 'pointer' }}
            >
              <td className="table-cell">{item.noticeId}</td>
              <td className="table-cell text-start">{item.title}</td>
              <td className="table-cell">{item.category}</td>
              <td className="table-cell">{item.isImportant ? '중요' : '보통'}</td>
              <td className="table-cell">{item.views}</td>
              <td className="table-cell">{formatDate(item.createdAt)}</td>
              <td className="table-cell">{formatDate(item.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}