import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import Root from "../root/Root";
import Dashboard from "../dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/dashboard",
                Component: Dashboard,
            },
        ],
    },
]);