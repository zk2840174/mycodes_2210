import React from 'react';

import {Link, Navigate, Route, Routes} from "react-router-dom";
import TodoListPage from "./TodoListPage";
import TodoReadPage from "./TodoReadPage";
import TodoModifyPage from "./TodoModifyPage";
import TodoRegisterPage from "./TodoRegisterPage";

function Index(props) {
    return (

        <>
            <Link to={"list"}>List</Link>
            <Link to={"register"}>Register</Link>
            <Routes>
                <Route path={'list'} element={<TodoListPage></TodoListPage>}></Route>
                <Route path={'read/:id'} element={<TodoReadPage></TodoReadPage>}></Route>
                <Route path={'modify/:id'} element={<TodoModifyPage></TodoModifyPage>}></Route>
                <Route path={'register'} element={<TodoRegisterPage></TodoRegisterPage>}></Route>
                <Route path={''} element={<Navigate to={"list"}></Navigate>}></Route>
            </Routes>
        </>
    );
}

export default Index;