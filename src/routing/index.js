

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import MainPage from "../pages/MainPage";
import Todo from "../pages/Todo";
import LoginPage from "../pages/LoginPage";
import JWT from "../pages/JWT";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
    },
    {
        path:"/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/todo/*",
        element: <Todo></Todo>
    },
    {
        path: "/jwt/*",
        element: <JWT></JWT>
    }
]);


export default router