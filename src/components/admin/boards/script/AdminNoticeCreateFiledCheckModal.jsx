import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeCreateFiledCheckModal({showDataInputCheckModal, handleCloseModal}) {
    return (
        <Modal size="sm" show={showDataInputCheckModal} onHide={handleCloseModal} centered>
            <Modal.Body className="text-center" style={{margin:"20px 0"}}>
                모든 필드를 입력해야 합니다.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}