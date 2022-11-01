import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteTodo, getTodo, putTodo} from "../../apis/todoApis";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useTodoRead from "./useTodoRead";




const useTodoModify = (id) => {

    const queryClient = useQueryClient()

    const delMutation = useMutation((id) => deleteTodo(id), {onSuccess:() => {
            console.log("deleted....")
            queryClient.invalidateQueries(['sampleTodo', id ])
    }} )

    const updateMutation = useMutation((todo) => putTodo(todo), {onSuccess:() => {
            console.log("updated....")
    }})


    return {delMutation, updateMutation }
}

export default useTodoModify