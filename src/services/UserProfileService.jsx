import { ApiManager } from "../utils/ApiManager";

export const UserProfileService = {
    getUserProfile: async () => {
        try {
            const response = await ApiManager.get('/user/profile');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updateUserProfile: async (firstName, lastName, email) => {
        try {
            const response = await ApiManager.put('/user/update-profile', {
                first_name: firstName,
                last_name: lastName,
                email
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    changePassword: async (oldPassword, newPassword) => {
        try {
            const response = await ApiManager.put('/user/profile/change-password', {
                old_password: oldPassword,
                new_password: newPassword
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}