import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import Root from "../root/Root";
import Dashboard from "../dashboard/Dashboard";
import CreatePost from "../dashboard/CreatePost/CreatePost";
import AdminOverView from "../dashboard/Admin/AdminOverView";
import All_Member from "../dashboard/All_Member/All_Member";
import Comments from "../dashboard/Comments/Comments";
import PendingPost from "../dashboard/PendingPost/PendingPost";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },

            //Admin Dashboard Routes
            {
                path: "dashboard",
                Component: Dashboard,
                children: [
                    {
                        path: "",
                        Component: AdminOverView
                    },
                    {
                        path: "create_post",
                        Component: CreatePost
                    },
                    {
                        path: "all_members",
                        Component: All_Member

                    }, {
                        path: "comments",
                        Component: Comments
                    },
                    {
                        path: "pending_post",
                        Component: PendingPost
                    }
                ]
            },
        ],
    },
]);