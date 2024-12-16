import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeCreateSuccessModal({showCreateCompletedModal, handleCloseModal, handleConfirmMoveBack}) {
    return (
        <Modal show={showCreateCompletedModal} onHide={handleCloseModal} centered>
            <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
                <p>글 작성이 성공적으로 등록 되었습니다.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleConfirmMoveBack}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}