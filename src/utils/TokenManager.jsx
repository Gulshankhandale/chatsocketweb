import { jwtDecode } from "jwt-decode";


export const TokenManager = {
    isValidToken: (token) => {
        if (!token) {
            return false;
        }
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    },

    setSession: (token) => {
        if(!token) {
            console.log('No token provided');
            return;
        }
        localStorage.setItem('token', token);
    },
    removeSession: () => {
        localStorage.removeItem('token');
    },
    getToken: () => {
        return localStorage.getItem('token');
    }
}