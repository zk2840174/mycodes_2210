

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import MainPage from "../pages/MainPage";
import Todo from "../pages/Todo";
import LoginPage from "../pages/LoginPage";


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
    }
]);


export default router