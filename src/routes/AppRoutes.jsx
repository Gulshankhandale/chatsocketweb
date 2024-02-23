import { lazy } from "react";
import Loadable from "../components/Loadable";
import AuthGuard from "../guards/AuthGuard";


const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const Layout = Loadable(lazy(() => import("../layouts")));

const AppRoutes = {
    path: "/",
    element: <AuthGuard><Layout /></AuthGuard>,
    children: [
        {
            path: "home",
            element: <Home />,
        },
    ],
};

export default AppRoutes;