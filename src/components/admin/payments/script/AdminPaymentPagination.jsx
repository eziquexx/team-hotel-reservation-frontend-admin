import Pagination from "react-bootstrap/Pagination";

export default function AdminPaymentPagination({
  page,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="justify-content-center">
      {/* <Pagination.First /> */}
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />
      {pageNumbers.map((number) => (
        <Pagination.Item
          active
          key={number}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}
