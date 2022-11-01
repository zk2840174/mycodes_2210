import {useParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getTodo} from "../../apis/todoApis";
import React from "react";


const useTodoRead = () => {

    const queryClient = useQueryClient()

    const {id} = useParams()

    let {data, isLoading, isFetching, isFetched} = useQuery(['sampleTodo', id], () => getTodo(id),{staleTime:60*1000*10} )

    if(isFetched) {
        data = queryClient.getQueryData(['sampleTodo', id])
    }


    return {data, isLoading, isFetching}
}

export default useTodoRead