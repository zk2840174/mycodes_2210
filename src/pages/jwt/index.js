import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import JWTTodoListPage from "./JWTTodoListPage";

function Index(props) {
    return (
     <>
         <Link to={"list"}>List</Link>
         <Link to={"register"}>Register</Link>
         <Link to={"../login"}>Login</Link>

         <Routes>
             <Route path={'list'} element={<JWTTodoListPage></JWTTodoListPage>}></Route>
         </Routes>
     </>
   );
}
export default Index;