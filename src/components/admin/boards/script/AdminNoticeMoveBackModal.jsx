import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeMoveBackModal({showModal, handleCloseModal, handleConfirmMoveBack}) {
    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body style={{margin: "20px 0"}} className="text-center">
                수정 사항이 있습니다.<br/>저장하지 않고 이동하시겠습니까?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    팝업 닫기
                </Button>
                <Button variant="primary" onClick={handleConfirmMoveBack}>
                    이동하기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}