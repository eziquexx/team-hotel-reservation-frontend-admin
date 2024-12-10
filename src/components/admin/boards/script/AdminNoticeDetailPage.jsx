import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AdminNoticeDetailPage() {
    const { noticeId } = useParams();
    const [ data, setData ] = useState(null);
    const [ selectedValue, setSelectedValue ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/notices/${noticeId}`);
                const data = await response.json();
                setData(data);
                setSelectedValue(data.isImportant ? '1' : '0');
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

    const handleChange = (event) => {
        setSelectedValue(event.target.value);  // 선택된 값 상태 업데이트
    };

    console.log(data);

    return (
        <> 
            <div>

                <Form style={{border: "1px solid #ddd"}}>
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
                                onChange={handleChange}
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
                            <Form.Control type="text" defaultValue={data.title} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>내용</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                as="textarea" 
                                defaultValue={data.content} 
                                style={{resize: "none", }}
                                rows= "14"
                            />
                        </Col>
                    </Form.Group>

                    <div>
                        <Button variant="secondary">뒤로</Button>
                        <Button variant="primary">수정</Button>
                        <Button variant="danger">삭제</Button>
                    </div>
                </Form>
            </div>
        </>
    );
}