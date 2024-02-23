import { ApiManager } from "../utils/ApiManager"
export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await ApiManager.post('/auth/login', {
                email,
                password
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    register: async (firstName, lastName, email, password) => {
        try {
            const response = await ApiManager.post('/auth/register', {
                first_name: firstName,
                last_name: lastName,
                email,
                password
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    logout: async () => {
        try {
            const response = await ApiManager.post('/auth/logout');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}