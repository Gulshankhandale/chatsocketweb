import React, { createContext, useReducer, useEffect } from 'react'
import AuthReducer, { initialState } from './reducers/AuthReducer';
import { TokenManager } from '../utils/TokenManager';
import { UserProfileService } from '../services/UserProfileService';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const init = async () => {
        try {
            const token = TokenManager.getToken();
            const isTokenValid = TokenManager.isValidToken(token);
            if(token && isTokenValid){
                const user = await UserProfileService.getUserProfile();
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        user,
                        token
                    }
                });
            }else{
                dispatch({
                    type: 'LOGOUT'
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'LOGOUT'
            });
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
