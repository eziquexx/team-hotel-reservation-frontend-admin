import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeDeleteSuccessModal({showDeleteCompletedModal, handleCloseModal, deleteSuccess, handleDeleteBackMove}) {
    return (
        <Modal show={showDeleteCompletedModal} onHide={handleCloseModal} centered>
            <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
                {deleteSuccess ? (
                    <p>삭제가 완료되었습니다.</p>
                ): (
                    <p>삭제 실패했습니다. 다시 시도해주세요.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteBackMove}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}