import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AdminNoticeMoveBackModal from "./AdminNoticeMoveBackModal";

export default function AdminNoticeDetailPage() {
    const navigate = useNavigate();
    const { noticeId } = useParams();
    const [ originalData, setOriginalData ] = useState(null); // 원본 데이터 저장
    const [ modifiedData, setModifiedData ] = useState(null); // 수정 데이터 저장
    const [ selectedImportant, setSelectedImportant ] = useState('');
    const [ selectedCategory, setSelectedCategory ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ showSaveModal, setShowSaveModal ] = useState(false);
    const [ isModified, setIsModified ] = useState(false); // 수정 변경사항 여부 체크
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/admin/notices/${noticeId}`);
                const data = await response.json();
                setOriginalData(data); // 원본으로도 저장하기
                setModifiedData(data); // 수정 가능한 데이터 저장하기
                setSelectedImportant(data.isImportant ? '1' : '0');
                setSelectedCategory(data.category);
                // setSelectedValue(data.importance.toString()); // 중요도 설정 (API에 따라 필드명 수정 필요)
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
            
        };

        fetchNotice();
    }, [noticeId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!originalData) return <div>No data</div>

    // 날짜
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
        return formattedDate;
    }

    // input 변경 핸들러    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // setModifiedData 호출
        setModifiedData((prevState) => {
            const updatedPost = { ...prevState, [name]: value };
    
            // 수정 내용 원본과 동일한지 비교
            const isContentModified = 
                updatedPost.category !== originalData.category || 
                updatedPost.important !== originalData.important || 
                updatedPost.title !== originalData.title ||
                updatedPost.content !== originalData.content;
            
            // 수정 여부 바로 상태 업데이트
            setIsModified(isContentModified);
    
            console.log("isContentModified: ", isContentModified); // boolean값 테스트 출력
            
            return updatedPost; // 새로운 데이터를 리턴하여 상태 갱신
        });
    };

    // 중요도 변경 handler
    const handleImportanceChange = (e) => {
        const { value } = e.target;

        // 중요도 값 업데이트
        setSelectedImportant(value);

        // modifiedData 업데이트
        setModifiedData((prevState) => {
            const updatedPost = { ...prevState, important: value === '1'};

            // 수정 여부 확인
            const isContentModified = 
                updatedPost.category !== originalData.category || 
                updatedPost.important !== originalData.important || 
                updatedPost.title !== originalData.title ||
                updatedPost.content !== originalData.content;

            setIsModified(isContentModified);

            console.log("isContentModified: ", isContentModified); // boolean값 테스트 출력

            return updatedPost; // 수정사항 업데이트
        })
    };

    // 카테고리 변경 handler
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setModifiedData({ ...modifiedData, category: e.target.value });
    }



    // 수정 여부 체크 함수
    const checkModifiedData = () => {
        const isContentModified =
            modifiedData.category !== originalData.category ||
            modifiedData.important !== originalData.important ||
            modifiedData.title !== originalData.title ||
            modifiedData.content !== originalData.content;

        setIsModified(isContentModified); // 수정 여부 상태 업데이트
    };


    // 모달창 닫기
    const handleCloseModal = () => {
        setShowModal(false);
        setShowSaveModal(false);
    };


    // 뒤로가기 modal
    const handleMoveBack = () => {
        // 수정 여부 확인
        if (JSON.stringify(modifiedData) !== JSON.stringify(originalData)) {
            setShowModal(true);
        } else {
            navigate(-1);
        }
    };

    // 뒤로가기 버튼 클릭시 이전 페이지로 이동
    const handleConfirmMoveBack = () => {
        setShowModal(false);
        navigate(-1);
    };


    // 수정 모달
    const handleEditModal = () => {
        setShowSaveModal(true);
    }

    // 수정 내용 DB에 저장 handler
    const handleSaveChanges = async () => {
        // 수정된 내용 api 호출해서 db에 저장하기
    }

    return (
        <> 
            <div>
                <h5 className="contentTitle">공지사항 상세</h5>
                <Form className="detailFormWrap">
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>게시판 ID</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={modifiedData.noticeId} />
                        </Col>
                        <Form.Label column sm={1}>중요도</Form.Label>
                        <Col sm={2}>
                            <Form.Select 
                                name="important"
                                value={selectedImportant}
                                onChange={handleImportanceChange}
                            >
                                <option value="">-- 선택 --</option>
                                <option value="1">중요</option>
                                <option value="0">보통</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>카테고리</Form.Label>
                        <Col sm={2}>
                            <Form.Select 
                                name="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">-- 선택 --</option>
                                <option value="NOTICE">NOTICE</option>
                                <option value="EVENT">EVENT</option>
                                <option value="INFO">INFO</option>
                            </Form.Select>
                        </Col>
                        <Form.Label column sm={1}>조회수</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={modifiedData.views} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>작성일</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={formatDate(modifiedData.createdAt)} />
                        </Col>
                        <Form.Label column sm={1}>수정일</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={formatDate(modifiedData.updatedAt)} />
                        </Col>
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>제목</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="text" 
                                name="title"
                                value={modifiedData.title} 
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>내용</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                as="textarea" 
                                name="content"
                                value={modifiedData.content} 
                                onChange={handleInputChange}
                                style={{resize: "none", }}
                                rows= "14"
                            />
                        </Col>
                    </Form.Group>

                    <div>
                        <Button 
                            variant="secondary" 
                            onClick={handleMoveBack}
                        >
                            뒤로
                        </Button>
                        <Button 
                            variant="primary" 
                            disabled={!isModified}
                            onClick={handleEditModal} 
                        >
                            수정
                        </Button>
                        <Button variant="danger">삭제</Button>
                    </div>
                </Form>
            </div>

            {/* 뒤로가기 버튼 클릭시 나오는 modal */}
            <AdminNoticeMoveBackModal 
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleConfirmMoveBack={handleConfirmMoveBack}
            />

            {/* 수정 확인 모달 */}
            <Modal show={showSaveModal} onHide={handleCloseModal} centered>
                <Modal.Body>
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
        </>
    );
}