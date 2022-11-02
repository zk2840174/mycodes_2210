import React, {useState} from 'react';
import {Button, FormGroup, TextField} from "@mui/material";
import useTodoRegister from "../../hooks/todo/useTodoRegister";



function TodoRegisterPage(props) {

    const {todo, handleChange, fileRef, clickSave} = useTodoRegister()

    return (
        <>
            <h1>Todo Register Page</h1>
            <FormGroup>
                <TextField type={'text'} name ="title" value={todo.title} variant={"outlined"} label={'Title'} onChange={(e) => handleChange(e)}></TextField>
                <TextField type={'text'} name={"writer"} value={todo.writer} variant={"filled"} label={'Writer'}  onChange={(e) => handleChange(e)}></TextField>
                <TextField type={'date'} name={"dueDate"} value={todo.dueDate} variant={"outlined"} label={'Due Date'}  onChange={(e) => handleChange(e)} readOnly={true}></TextField>
                <div>
                    <TextField type="file"  ref={fileRef} inputProps={{multiple: true}} onChange={(e) => handleFileChange(e)} />
                </div>
                <div>
                    <Button variant="contained" onClick={clickSave}>SAVE</Button>
                </div>
            </FormGroup>
        </>
    );
}

export default TodoRegisterPage;