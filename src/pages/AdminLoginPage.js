import React, { useState } from 'react';

const AdminLoginPage = () => {
    const [staffUserId, setStaffUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(''); // Clear any existing error

        try {
            const response = await fetch('/api/admin/login', { // 관리자 전용 로그인 API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ staff_user_id: staffUserId, password }), // JSON 필드 이름 맞춤
            });

            if (response.ok) {
                const data = await response.json();
                document.cookie = `token=${data.token}; path=/; secure`; // Save token in cookies
                window.location.href = '/admin'; // Redirect to admin page
            } else {
                setError('Invalid ID or password.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>Admin Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Staff ID:</label>
                    <input
                        type="text"
                        value={staffUserId}
                        onChange={(e) => setStaffUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
