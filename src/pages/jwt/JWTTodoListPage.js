import React from 'react';

import {Link} from "react-router-dom";
import PageList from "../../components/PageList";
import useJWTTodoList from "../../hooks/jwt/useJWTTodoList";

function JwtTodoListPage(props) {

    const {isLoading, isFetching, isError, data, setSearchParams, locationState} = useJWTTodoList()

    console.log("ERROR" , isError)

    if(isError){
        return <h1>ERROR</h1>
    }

    if(isLoading|| isFetching){
        return <h1>Loading....</h1>
    }

    const {dtoList} = data

    const getResultMessage = () => {
        if(!locationState || !locationState.result){
            return ""
        }
        //console.log(locationState)
        return locationState.result
    }


    return (
        <div>
            <h1>Todo List Page</h1>

            {locationState ? <h2>처리결과 {getResultMessage()}</h2>:<></>}

            {dtoList.map(todo => <li key={todo.id}>
                {todo.id} --  <Link to={`../read/${todo.id}`}> {todo.title} </Link>
            </li>)}
            <PageList data={data} setSearchParam ={setSearchParams}></PageList>
        </div>
    );
}

export default JwtTodoListPage;