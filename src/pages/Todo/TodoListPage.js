import React from 'react';
import useTodoList from "../../hooks/todo/useTodoList";
import PageList from "../../components/PageList";
import {Link} from "react-router-dom";


function TodoListPage(props) {

    const {isLoading, isFetching, data, setSearchParams, locationState} = useTodoList()

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



export default TodoListPage;