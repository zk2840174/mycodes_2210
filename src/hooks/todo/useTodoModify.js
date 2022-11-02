import {useRef, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import axios from "axios";
import {useNavigate} from "react-router-dom";

const multipartHeader = {"Content-Type": "multipart/form-data"}

const putTodo = async (sampleTodo) => {
    const formData = new FormData()

    console.log("-----------------------------")
    console.log(sampleTodo)
    for (const prop in sampleTodo) {

        console.log(prop)

        if(prop !== 'files') {
            formData.append(prop, sampleTodo[prop])
        }
    }

    console.log(sampleTodo.files)

    if(sampleTodo.files) {
        for (let i = 0; i < sampleTodo.files.length; i++) {
            formData.append("files", sampleTodo.files[i])
        }
    }


    const res = await  axios.put(`http://localhost/api/sampleTodos/${sampleTodo.id}`, formData, {
        headers:multipartHeader })

    return res.data

}

export const deleteTodo = async (id) => {

    const res = await axios.delete(`http://localhost/api/sampleTodos/${id}`)

    return res.data

}


const useTodoModify = (data) => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    data.files = []
    const [todo,setTodo] = useState(data)

    const fileRef = useRef()


    const updateMutation = useMutation(['todo',data.id], () => putTodo(todo), {onSuccess:() => {
            console.log('updated')
            queryClient.invalidateQueries(['todo', data.id])
    }})



    const deleteMutation = useMutation(['todo',data.id], () => deleteTodo(data.id),
        {
            onSuccess:(newData) => {
                console.log('deleted')
                navigate('../list', {state: newData})
            },
            onSettled:(newData, error, { listId }) => {
                console.log("deleted2.........", data.id)
                queryClient.invalidateQueries(['todo', data.id]);
            }
        })

    const handleChange = (e) => {

        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleCheckBoxChange = (e) => {
        todo.complete = e.target.checked
        setTodo({...todo})
    }

    const clickModify = () => {

        const fileEle = fileRef.current.querySelector("input")

        todo.files = fileEle.files

        console.log("clickModify",todo)
        updateMutation.mutate(todo)
    }

    const clickDelete = () => {
        deleteMutation.mutate(todo)
    }

    return {handleChange,handleCheckBoxChange,fileRef,clickModify, clickDelete, todo }
}

export default useTodoModify