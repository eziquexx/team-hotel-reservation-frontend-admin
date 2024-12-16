import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeEditSuccessModal({showSaveCompletedModal, handleCloseModal, saveSuccess}) {
    return (
        <Modal show={showSaveCompletedModal} onHide={handleCloseModal} centered>
            <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
                {saveSuccess ? (
                    <p>수정이 완료되었습니다.</p>
                ): (
                    <p>수정이 실패했습니다. 다시 시도해주세요.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}