import { useContext } from "react";

import AuthContext from "../context/AuthContext";

export const UseAuthentication = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("UseAuthentication must be used within an AuthProvider");
    }
    return context;
}