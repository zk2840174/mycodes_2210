import React, {useRef, useState} from 'react';
import useTodoRead from "../../hooks/todo/useTodoRead";
import {Button, Checkbox, FormControlLabel, FormGroup, Input, TextField} from "@mui/material";
import useTodoModify from "../../hooks/todo/useTodoModify";

function TodoModifyPage(props) {

    const {isLoading,isFetching,data} = useTodoRead({hold:true})

    if(isLoading || isFetching) {
        return <h1>Loading............</h1>
    }

    return (
        <>
            <h1>Todo Modify / Delete </h1>
            <TodoModifyForm data={data}></TodoModifyForm>
        </>
    );
}


function TodoModifyForm ({data}) {

    const {handleChange,handleCheckBoxChange,fileRef, clickDelete, clickModify, todo } = useTodoModify(data)


    return  (
        <>
            <FormGroup>
                <TextField type={'text'} value={todo.id} variant={"filled"} label={'ID'} ></TextField>
                <TextField type={'text'} name ="title" value={todo.title} variant={"outlined"} label={'Title'} onChange={(e) => handleChange(e)}></TextField>
                <TextField type={'text'} name={"writer"} value={todo.writer} variant={"filled"} label={'Writer'}  onChange={(e) => handleChange(e)}></TextField>
                <TextField type={'date'} name={"dueDate"} value={todo.dueDate} variant={"outlined"} label={'Due Date'}  onChange={(e) => handleChange(e)} readOnly={true}></TextField>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={todo.complete} name={'complete'} onChange={(e) => handleCheckBoxChange(e)} />} label="Complete" />
                </FormGroup>
                <div>
                    <TextField type="file" ref={fileRef} name={'files'} inputProps={{multiple: true}}/>
                </div>
                <div>
                    <Button variant="contained" onClick={clickDelete}>DELETE</Button>
                    <Button variant="contained" onClick={clickModify}>MODIFY</Button>
                </div>
            </FormGroup>
        </>
    )

}


export default TodoModifyPage;