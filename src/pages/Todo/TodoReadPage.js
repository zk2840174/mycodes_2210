import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import useTodoRead from "../../hooks/todo/useTodoRead";
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";



function TodoReadPage(props) {

    const {isLoading,isFetching,data} = useTodoRead()

    if(isLoading || isFetching) {
        return <h1>Loading............</h1>
    }
    const {id,title,writer, dueDate, files, complete} = data

    return (
        <>
         <h1>Todo Read</h1>
         <FormGroup>
             <TextField type={'text'} value={id} variant={"filled"} label={'ID'}></TextField>
             <TextField type={'text'} value={title} variant={"filled"} label={'Title'}></TextField>
             <TextField type={'text'} value={writer} variant={"filled"} label={'Writer'}></TextField>
             <TextField type={'date'} value={dueDate} variant={"filled"} label={'Due Date'} readOnly={true}></TextField>
             <FormGroup>
                 <FormControlLabel control={<Checkbox checked={complete} name={'complete'} readOnly={true}/>} label="Complete" />
             </FormGroup>
             <Button variant="contained"> <Link to={`../modify/${id}`}>MODIFY/DELETE</Link></Button>
         </FormGroup>
         <div>
             <div>
                 {files?.map(file => <img  key={file.uuid} src={`http://localhost/view/${file.uuid}_${file.fileName}`} />)}
             </div>
         </div>

        </>
    );
}

export default TodoReadPage;