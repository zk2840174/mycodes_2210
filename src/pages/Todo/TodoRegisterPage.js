import React, {useState} from 'react';
import {Button, Divider, TextField} from "@mui/material";
import {useMutation} from "@tanstack/react-query";
import {postSend, postTodo} from "../../apis/todoApis";
import {useNavigate} from "react-router-dom";

function TodoRegisterPage(props) {

    const navigate = useNavigate()

    const [todo, setTodo] = useState( {
        title:'',writer:'',dueDate:'', files:[]
    })

    const mutation = useMutation(postSend, {
        onSuccess: (result) =>{
            console.log(result)
            navigate('/todo/list')
        }
    })

    const handleChange = (prop, value) => {

        todo[prop] = value

        setTodo({...todo})
    }

    const handleFileChange = (e)  => {

        todo.files = e.target.files
        setTodo({...todo})
    }

    const handleClick = () => {

        mutation.mutate(todo)

    }


    return (
        <>
            <div>
                <TextField  label="Title" variant="standard" value={todo.title} onChange={(e) => handleChange('title', e.target.value)} />
            </div>
            <div>
                <TextField  label="Writer" variant="standard" value={todo.writer} onChange={(e) => handleChange('writer', e.target.value)}/>
            </div>
            <div>
                <TextField  lable="DueDate" type={'date'} variant="standard" value={todo.dueDate} onChange={(e) => handleChange('dueDate', e.target.value)} />
            </div>
            <div>
                <input  type={'file'} multiple={true} onChange={(e) => handleFileChange(e)} />
            </div>

            <div>
                <Button  color="primary" onClick={handleClick}>
                    Register
                </Button>
            </div>
        </>
    );
}

export default TodoRegisterPage;