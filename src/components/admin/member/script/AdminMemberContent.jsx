import React, { useState, useEffect } from 'react';

export default function AdminMemberContent() {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/admin/member', {
                    credentials: "include", // 쿠키를 요청에 포함
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch members');
                }

                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error('Error fetching members:', error);
                setError(error.message);
            }
        };

        fetchMembers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>회원관리</h1>
            <div>
                <h2>회원 목록</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        {/* 추가 필드 */}
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((member) => (
                        <tr key={member.memberId}>
                            <td>{member.memberId}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            {/* 추가 필드 데이터 */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}