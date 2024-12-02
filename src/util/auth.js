import  { jwtDecode } from 'jwt-decode';

// Get JWT from cookies
export const getJWTFromCookies = () => {
    const cookies = document.cookie.split(';');
    const token = cookies.find(cookie => cookie.trim().startsWith('token='));
    return token ? token.split('=')[1] : null;
};

// Decode JWT to get user information
export const decodeJWT = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Invalid JWT token:', error);
        return null;
    }
};

// Check if user has the ADMIN role
export const isAdmin = (token) => {
    const decoded = decodeJWT(token);
    return decoded && decoded.role === 'ADMIN';
};
