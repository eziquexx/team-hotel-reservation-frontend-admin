import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeEditModal({showSaveModal, handleCloseModal, handleSaveChanges}) {
    return (
      <Modal show={showSaveModal} onHide={handleCloseModal} centered>
          <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
              <p>수정된 내용을 저장하시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                  아니오
              </Button>
              <Button variant="primary" onClick={handleSaveChanges}>
                  예
              </Button>
          </Modal.Footer>
      </Modal>
    );
}