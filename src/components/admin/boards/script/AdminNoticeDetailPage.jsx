import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AdminNoticeMoveBackModal from "./AdminNoticeMoveBackModal";

export default function AdminNoticeDetailPage() {
    const navigate = useNavigate();
    const { noticeId } = useParams();
    const [ originalData, setOriginalData ] = useState(null); // 원본 데이터 저장
    const [ data, setData ] = useState(null); // 수정 데이터 저장
    const [ selectedValue, setSelectedValue ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [showModal, setShowModal] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/admin/notices/${noticeId}`);
                const data = await response.json();
                setData(data); // fetch문으로 가져온 데이터 저장
                setOriginalData(data); // 원본으로도 저장하기
                setSelectedValue(data.isImportant ? '1' : '0');
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
    if (!data) return <div>No data</div>

    // 날짜
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
        return formattedDate;
    }

    // input 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // 중요도 변경 핸들러
    const handleImportanceChange = (e) => {
        setSelectedValue(e.target.value);
        setData({ ...data, isImportant: e.target.value === '1' }); 
    };

    console.log(data);

    // 모달창 닫기
    const handleCloseModal = () => {
        setShowModal(false);
    };


    // 뒤로가기 modal
    const handleMoveBack = () => {
        // 수정 여부 확인
        if (JSON.stringify(data) !== JSON.stringify(originalData)) {
            setShowModal(true);
        } else {
            navigate(-1);
        }
    };

    const handleConfirmMoveBack = () => {
        setShowModal(false);
        navigate(-1);
    };

    return (
        <> 
            <div>
                <Form className="detailFormWrap">
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>게시판 ID</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={data.noticeId} />
                        </Col>
                        <Form.Label column sm={1}>중요도</Form.Label>
                        <Col sm={2}>
                            <Form.Select 
                                aria-label="Default select example" 
                                value={selectedValue}
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
                            <Form.Control plaintext readOnly defaultValue={data.category} />
                        </Col>
                        <Form.Label column sm={1}>조회수</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={data.views} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>작성일</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={formatDate(data.createdAt)} />
                        </Col>
                        <Form.Label column sm={1}>수정일</Form.Label>
                        <Col sm={2}>
                            <Form.Control plaintext readOnly defaultValue={formatDate(data.updatedAt)} />
                        </Col>
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>제목</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="text" 
                                value={data.title} 
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>내용</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                as="textarea" 
                                value={data.content} 
                                onChange={handleInputChange}
                                style={{resize: "none", }}
                                rows= "14"
                            />
                        </Col>
                    </Form.Group>

                    <div>
                        <Button variant="secondary" onClick={handleMoveBack}>뒤로</Button>
                        <Button variant="primary">수정</Button>
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
        </>
    );
}