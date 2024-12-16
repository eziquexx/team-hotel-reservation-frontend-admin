import { Button, Modal } from "react-bootstrap";

export default function AdminNoticeDeleteModal({showDeleteModal, handleCloseModal, handleDeleteChanges}) {
    return (
      <Modal show={showDeleteModal} onHide={handleCloseModal} centered>
          <Modal.Body className="text-center" style={{margin:"20px 0 10px"}}>
              <p>해당 게시글을 삭제하시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                  아니오
              </Button>
              <Button variant="danger" onClick={handleDeleteChanges}>
                  예
              </Button>
          </Modal.Footer>
      </Modal>
    );
}