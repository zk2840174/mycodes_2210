import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const multipartHeader = {"Content-Type": "multipart/form-data"}

const initState = {
    title:'',
    writer: '',
    dueDate:'',
    files:[]
}


const postTodo = async (sampleTodo) => {


    const formData = new FormData()

    for (const prop in sampleTodo) {

        if(prop !== 'files') {
            formData.append(prop, sampleTodo[prop])
        }
    }

    for(let i = 0; i < sampleTodo.files.length; i++){
        formData.append("files", sampleTodo.files[i])
    }



    const res = await  axios.post(`http://localhost/api/sampleTodos/`, formData, {
        headers:multipartHeader })

    return res.data

}


const useTodoRegister = () => {

    const [todo,setTodo]= useState({...initState})

    const fileRef = useRef()

    const navigate = useNavigate()

    const handleChange = (e) => {

        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleFileChange = (e) => {
        todo.files = e.target.files
        setTodo({...todo})
    }

    const clickSave = () => {

        const fileEle = fileRef.current.querySelector("input")

        todo.files = fileEle.files

        registerMutation.mutate(todo)
    }

    const queryClient = useQueryClient()

    const registerMutation = useMutation(postTodo, {onSuccess: () => {
            console.log("added")
            setTodo({...initState})
            navigate('../list', {state:{result:'success'}})
        }
    })

    return {todo, handleChange, fileRef, clickSave}
}

export default useTodoRegister