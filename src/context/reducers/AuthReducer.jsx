import { TokenManager } from "../../utils/TokenManager";

export const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            TokenManager.setSession(action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'REGISTER':
            TokenManager.setSession(action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            TokenManager.removeSession();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        default:
            return { ...state};
    }
}

export default AuthReducer;

