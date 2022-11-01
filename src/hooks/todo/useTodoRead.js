import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getTodo} from "../../apis/todoApis";
import React from "react";


const useTodoRead = () => {

    const {id} = useParams()

    const {data, isLoading, isFetching} = useQuery(['sampleTodo', id], () => getTodo(id))

    return {data, isLoading, isFetching}
}

export default useTodoRead