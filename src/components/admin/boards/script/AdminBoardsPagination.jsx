import { Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { Navigate, useNavigate } from "react-router-dom";

// 24.12.10 지은 : paymnet에서 paginavigation 가져옴.
export default function AdminBoardsPaginavigation({
  page,
  totalElements,
  totalPages,
  size,
  onPageChange,
}) {
  const navigate = useNavigate();

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="position-relative">
      <Pagination className="justify-content-center">
        {/* <Pagination.First /> */}
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => page > 1 && onPageChange(page - 1)}
        />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === page} 
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={page === totalElements}
          onClick={() => page < totalPages && onPageChange(page + 1)}
        />
        {/* <Pagination.Last /> */}
      </Pagination>
      <Button 
        className="position-absolute top-0 start-0"
        onClick={() => navigate('/admin/boards/create')}
      >
        글쓰기
      </Button>
    </div>
  );
}