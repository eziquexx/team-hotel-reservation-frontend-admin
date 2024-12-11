import Pagination from "react-bootstrap/Pagination";

// 24.12.06 지은 : paginavigation 작업 fin.
export default function AdminPaymentPaginavigation({
  page,
  totalElements,
  totalPages,
  size,
  onPageChange,
}) {
  // const totalPages = totalElements;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
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
  );
}
