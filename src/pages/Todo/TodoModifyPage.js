import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteTodo, getTodo, postSend, putTodo} from "../../apis/todoApis";
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import useTodoModify from "../../hooks/todo/useTodoModify";


const initState =  {
    id:0,
    title:'',
    writer: '',
    dueDate: '',
    complete:false,
    files: [],
    newFiles:[]
}

function TodoModifyPage(props) {

    const {id} = useParams()

    const [todo,setTodo] = useState(initState)

    const {delMutation, updateMutation} = useTodoModify()

    const {data, isLoading, isFetching} = useQuery(['sampleTodo', id], () => getTodo(id), {
        onSettled:serverData => setTodo(serverData),
        staleTime: Infinity
    })

    if(isLoading || isFetching ){
        return <h1>Loading...........</h1>
    }

    const { title,writer,files,dueDate, complete} = todo

    const handleUpdate = (e) => {
        todo[e.target.name] = e.target.value

        setTodo({...todo})

    }
    const handleFileChange = (e)  => {

        todo.newfiles = e.target.files
        setTodo({...todo})
    }

    const handleBoolean = (e) => {
        todo.complete = e.target.checked
        setTodo({...todo})
    }

    return (
        <>
            <h1>Todo Modify {id} </h1>

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
                <input  type={'file'} multiple={true} onChange={(e) => handleFileChange(e)} />
            </div>
            <div>
                <Button variant="contained" onClick={() => delMutation.mutate(id) }>DEL</Button>
                <Button variant="contained" onClick={() => updateMutation.mutate(todo) }>MOD</Button>
            </div>

        </>
    );

}

export default TodoModifyPage;
