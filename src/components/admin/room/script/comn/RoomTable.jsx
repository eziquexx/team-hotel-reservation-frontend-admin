import React from "react";
import '../../css/RoomTable.css';
function RoomTable({ headers, rows, renderCell, onRowClick }) {
    return (
        <table className="room-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.length > 0 ? (
                    rows.map((row, rowIndex) => (
                        <tr key={rowIndex} 
                        onClick={onRowClick? () => onRowClick(row):null} //클릭 이벤트가 전달된 경우만 실행
                        style={onRowClick ? {cursor: "pointer"}:{}} // 클릭 가능한 경우 스타일 추가
                        > 
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>
                                    {renderCell
                                        ? renderCell(row, header)
                                        : row[header.toLowerCase()] || ""}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={headers.length}>해당 데이터가 없습니다.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default RoomTable;
