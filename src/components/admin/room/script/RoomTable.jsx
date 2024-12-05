import React, { useState, useEffect } from "react";
import "../css/RoomTable.css"
import ToggleSwitch from "./ToggleSwitch"; // 토글 버튼 컴포넌트


export default function RoomTable() {
    const [rooms, setRooms] = useState([]);
    const [date, setDate] = useState(""); // 날짜
    const [resStatus, setStatus] = useState(""); // 객실 상태
    const [loading, setLoading] = useState(false); // 로딩 상태
    const statusOptions = ["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"];

    // API 요청
    const fetchRooms = async () => {
        try {
            setLoading(true);

            // requestParam을 URL에 추가
            let queryParams = new URLSearchParams({ date: date || "" });
            let apiUrl = "";

            if (resStatus) {
                queryParams.append("resStatus", resStatus);
                apiUrl = `?${queryParams}`;
            } else {
                apiUrl = `/typeDetails?${queryParams}`;
            }

            const response = await fetch(`http://localhost:8080/api/admin/rooms${apiUrl}`);
            if (!response.ok) throw new Error("Failed to fetch rooms");

            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        } finally {
            setLoading(false);
        }
    };

    // 객실 상태 변경 API
    const handleRoomStatusToggle = async (roomNumber, newState) => {
        const newStatus = newState ? "AVAILABLE" : "OCCUPIED"; // 토글 상태 변경
        try {
            const response = await fetch(
                `http://localhost:8080/api/admin/rooms/details/${roomNumber}/${newStatus}`,
                {
                    method: "PUT",
                }
            );
            if (response.ok) {
                console.log(`${roomNumber} 호실 상태 변경 완료!`);
                // 상태 변경 후 데이터를 다시 불러오기
                setRooms((prevRooms) =>
                    prevRooms.map((room) =>
                        room.roomNumber === roomNumber
                            ? { ...room, status: newStatus }
                            : room
                    )
                );
            } else {
                console.error("객실 상태 업데이트 실패!");
            }
        } catch (error) {
            console.error("객실 업데이트 중 에러 발생: ", error);
        }
    };

    // 조회 버튼 클릭시 실행되는 함수
    const handleSearch = () => {
        if (!date) {
            alert("날짜를 입력하세요.");
            return;
        }
        fetchRooms();
    };

    return (
        <div className="room-table-container">
    <h2>객실관리</h2>
    {/* 조건 입력 필드 */}
    <div>
        <label htmlFor="date">예약 날짜 : </label>
        <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="status">객실 상태 : </label>
        <select
            id="status"
            value={resStatus}
            onChange={(e) => setStatus(e.target.value)}
        >
            <option value="">== 상태 선택 ==</option>
            {statusOptions.map((status) => (
                <option key={status} value={status}>
                    {status}
                </option>
            ))}
        </select>
        <button onClick={handleSearch}>조회</button>
    </div>
    {/* 로딩 중 표시 */}
    {loading && <p>로딩중 ..</p>}

    {/* 테이블 */}
    <table className="room-table">
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
                <th>상태 변경</th>
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
                        <td>
                            {/* 토글 버튼 */}
                            <ToggleSwitch
                                isChecked={room.status === "AVAILABLE"}
                                onToggle={(newState) =>
                                    handleRoomStatusToggle(room.roomNumber, newState)
                                }
                            />
                        </td>
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
