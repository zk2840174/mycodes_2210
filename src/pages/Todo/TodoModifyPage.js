import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteTodo, getTodo, postSend, putTodo} from "../../apis/todoApis";
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import useTodoModify from "../../hooks/todo/useTodoModify";
import useTodoRead from "../../hooks/todo/useTodoRead";

const initState =  {
    id:0,
    title:'aa',
    writer: 'bb',
    dueDate: '2022-11-11',
    complete:false,
    newFiles:[]
}


function TodoModifyPage(props) {

    const {data, isLoading, isFetching} = useTodoRead()

    if(isLoading || isFetching){
        return <h1>Loading....</h1>
    }

    return (
        <>
            <TodoModifyComponent data={data}></TodoModifyComponent>

        </>
    );

}

function TodoModifyComponent ({data}) {

    const {delMutation, updateMutation} = useTodoModify(data.id)

    const [todo,setTodo] = useState(data)

    const handleUpdate = (e) => {
        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const handleBoolean =  (e) => {
        todo.complete = e.target.checked
        setTodo({...todo})
    }

    const handleFileUpdate = (e) => {

        todo.newFiles = e.target.files
        setTodo({...todo})
    }


    const { id, title,writer,files,dueDate, complete} = todo

    return (
        <>
            <h1>Todo Modify</h1>
            <FormGroup>
                <TextField type={'text'} name={'title'} value={title} onChange={(e) => handleUpdate(e) }></TextField>
            </FormGroup>
            <FormGroup>
                <TextField type={'writer'} name={'writer'} value={writer} onChange={(e) => handleUpdate(e) }></TextField>
                <TextField type={'date'} name={'dueDate'} value={dueDate} onChange={(e) => handleUpdate(e) }></TextField>
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={complete} name={'complete'} onChange={(e) => handleBoolean(e)} />} label="Complete" />
            </FormGroup>
            <div>
                <input  type={'file'} multiple={true} onChange={(e) => handleFileUpdate(e)} />
            </div>
            <div>
                <Button variant="contained" onClick={() => {} }>DEL</Button>
                <Button variant="contained" onClick={() => {updateMutation.mutate(todo)} }>MOD</Button>
            </div>
        </>
    )

}

export default TodoModifyPage;
