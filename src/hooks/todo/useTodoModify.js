import {useMutation} from "@tanstack/react-query";
import {deleteTodo, putTodo} from "../../apis/todoApis";


const useTodoModify = () => {

    const delMutation = useMutation((id) => deleteTodo(id), {onSuccess:() => {
        console.log("deleted....")
    }} )

    const updateMutation = useMutation((todo) => putTodo(todo), {onSuccess:() => {
        console.log("updated....")
    }})

    return {delMutation, updateMutation}
}

export default useTodoModify