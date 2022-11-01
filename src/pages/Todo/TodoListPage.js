import React, {useCallback} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import {getTodoList} from "../../apis/todoApis";
import {useQuery} from "@tanstack/react-query";
import useTodoList from "../../hooks/todo/useTodoList";

function TodoListPage(props) {

    const {rq, handlePaging} = useTodoList()

    const {data, isLoading, isFetching} = rq

    if(isFetching || isLoading) {
        return(
            <div>
                <h1>Loading.....</h1>
            </div>)
    }



    return (
        <div>
            <h1>Todo List Page</h1>

            <ul>
                {data.dtoList.map(sampleTodo =>
                    <li key={sampleTodo.id}>
                        <Link to={`../read/${sampleTodo.id}`}> {sampleTodo.title} </Link>
                        <div>
                        {sampleTodo.files?.map(file => <img key={file.uuid} src={`http://localhost/view/${file.uuid}_${file.fileName}` } style={{width:'100px'}} /> )}
                        </div>
                    </li>)}
            </ul>

            <PageList {...data} handlePaging ={handlePaging}></PageList>

        </div>
    );
}

function PageList({start, end, prev, next, page, handlePaging}) {

    function makeArr(){
        const numArr = []

        for(let i = start; i <= end; i++){
            numArr.push(i)
        }
        return numArr
    }

    return (
        <ul>
            {prev? <span key={start-1} onClick={()=> handlePaging(start -1)}> &nbsp; PREV&nbsp;</span>:<></>}
            {makeArr().map(num => <span key={num} onClick={()=> handlePaging(num)} >&nbsp;{num}&nbsp;</span>)}
            {next? <span key={end +1 }  onClick={()=> handlePaging(end +1)}>&nbsp;NEXT&nbsp;</span>:<></>}
        </ul>
    )
}

export default TodoListPage;