import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import Root from "../root/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
        ],
    },
]);