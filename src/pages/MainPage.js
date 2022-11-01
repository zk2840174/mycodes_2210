import React from 'react';
import {Link} from "react-router-dom";


function MainPage(props) {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to={"/todo/list?page=1"}>TODO</Link>
        </div>
    );
}

export default MainPage;