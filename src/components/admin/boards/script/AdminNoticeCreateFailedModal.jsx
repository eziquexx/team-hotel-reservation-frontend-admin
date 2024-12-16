import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeCreateFailedModal({showCreateFaileddModal, handleCloseModal}) {
    return (
        <Modal show={showCreateFaileddModal} onHide={handleCloseModal} centered>
            <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
                <p>글 작성에 실패했습니다. 다시 시도해주세요.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}