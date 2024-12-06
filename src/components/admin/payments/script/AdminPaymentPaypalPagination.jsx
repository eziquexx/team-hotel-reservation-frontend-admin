import { Pagination } from "react-bootstrap";

export default function AdminPaymentPaypalPagination() {
    return (
        <>
            <Pagination className="justify-content-center">
                {/* <Pagination.First /> */}
                <Pagination.Prev/>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Next/>
                {/* <Pagination.Last /> */}
            </Pagination>
        </>
    );
};