import { lazy } from "react";
import Loadable from "../components/Loadable";
const Login = Loadable(lazy(() => import("../pages/Authentication/Login")));
const Register = Loadable(lazy(() => import("../pages/Authentication/Register")));
import GuestGuard from "../guards/GuestGuard";

const AuthRoutes = {
    path: "/auth",
    children: [
        {
            path: "login",
            element: <GuestGuard><Login /></GuestGuard>,
        },
        {
            path: "register",
            element: <GuestGuard><Register /></GuestGuard>,
        },
    ],
}

export default AuthRoutes;