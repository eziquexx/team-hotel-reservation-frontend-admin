import React, { useState, useEffect } from "react";

export default function RoomTable({ date, resStatus }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, [date, resStatus]); // date와 resStatus가 변경될 때마다 데이터 재요청

  const fetchRooms = async () => {
    try {
      // requestParam을 URL에 추가
      const queryParams = new URLSearchParams({
        date: "2024-12-25" || "", // date 값
        resStatus: "CONFIRMED" || "", // resStatus 값
      });

      const response = await fetch(`http://localhost:8080/api/admin/rooms?${queryParams}`);
      if (!response.ok) throw new Error("Failed to fetch rooms");

      const data = await response.json();
   
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div>
      <h2>객실관리</h2>
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
              <td colSpan="8">데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
