import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getTodo} from "../../apis/todoApis";
import {Button} from "@mui/material";
import useTodoRead from "../../hooks/todo/useTodoRead";

function TodoReadPage(props) {


    const {data, isLoading, isFetching} = useTodoRead()

    if(isLoading || isFetching){
        return <h1>Loading............</h1>
    }

    const { id, title,writer,files,dueDate, complete} = data

    return (
        <>
            <h1>Todo Read {id} </h1>

            <h2>{title}</h2>
            <h2>{writer}</h2>
            <h2>{dueDate}</h2>
            <h2>{complete?'END':'Not Yet'}</h2>
            <Button>
                <Link to={`../modify/${id}`}>MODIFY</Link>
            </Button>
        </>
    );
}

export default TodoReadPage;