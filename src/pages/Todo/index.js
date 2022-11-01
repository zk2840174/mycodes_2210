import React from 'react';

import {Route, Routes} from "react-router-dom";
import TodoListPage from "./TodoListPage";
import TodoRegisterPage from "./TodoRegisterPage";
import TodoReadPage from "./TodoReadPage";
import TodoModifyPage from "./TodoModifyPage";
import {getTodo} from "../../apis/todoApis";

function Index(props) {
    return (
        <Routes>
            <Route path={'list'} element={<TodoListPage></TodoListPage>}></Route>
            <Route path={'register'} element={<TodoRegisterPage></TodoRegisterPage>}></Route>

            <Route path={'read/:id'} element={<TodoReadPage></TodoReadPage>}></Route>

            <Route path={'modify/:id'} element={<TodoModifyPage></TodoModifyPage>}></Route>

        </Routes>
    );
}

export default Index;