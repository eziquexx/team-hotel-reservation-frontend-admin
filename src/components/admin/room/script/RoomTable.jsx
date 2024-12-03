import React, { useState, useEffect } from "react";

export default function RoomTable() {
    const [rooms, setRooms] = useState([]);
    const [date, setDate] = useState("");//날짜
    const [resStatus, setStatus] = useState("");//객실 상태
    const [loading, setLoading] = useState(false);//로딩 상태
    const statusOptions = ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"];

    // API요청
    useEffect(() => {
        if (date && resStatus) {
            fetchRooms();
        }
    }, [date, resStatus]);
    const fetchRooms = async () => {
        try {
            setLoading(true);
            // requestParam을 URL에 추가
            const queryParams = new URLSearchParams({
                date: date || "", // date 값
                resStatus: resStatus || "", // resStatus 값
            });

            const response = await fetch(`http://localhost:8080/api/admin/rooms?${queryParams}`);
            if (!response.ok) throw new Error("Failed to fetch rooms");

            const data = await response.json();

            setRooms(data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        if(date && resStatus){
            fetchRooms();
        }
    }, [date,resStatus]);

    // 조회 버튼 클릭시 실행되는 함수
    const handleSearch = () => {
        fetchRooms();
    }
    return (
        <div>
            <h2>객실관리</h2>
            {/* 조건 입력 필드 */}
            <div>
                <label htmlFor="date">예약 날짜 : </label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="status">객실 상태 : </label>
                <select
                    id="status"
                    value={resStatus}
                    onChange={(e) => setStatus(e.target.value)}>

                    <option value="">-- 상태 선택 --</option>
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSearch }>조회</button>
            {/* 로딩 중 표시 */}
            {loading && <p>로딩중 ..</p>}

            {/* 테이블 */}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>예약 ID</th>
                        <th>객실 ID</th>
                        <th>객실 타입</th>
                        <th>객실 호수</th>
                        <th>층수</th>
                        <th>객실 상태</th>
                        <th>객실 전망</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.length > 0 ? (
                        rooms.map((room, index) => (
                            <tr key={room.id}>
                                <td>{index + 1}</td>
                                <td>{room.reservationId}</td>
                                <td>{room.roomId}</td>
                                <td>{room.name}</td>
                                <td>{room.roomNumber}</td>
                                <td>{room.floor}</td>
                                <td>{room.status}</td>
                                <td>{room.view}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">해당 객실이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
