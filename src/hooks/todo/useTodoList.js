import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getTodoList} from "../../apis/todoApis";
import React from "react";


const useTodoList = () => {

    const [urlSeachParams , setUrlSearchParams] = useSearchParams()

    const query = {page: urlSeachParams.get("page") || 1, size:urlSeachParams.get("size")||10}

    const rq = useQuery(['sampleTodo','list', query.page, query.size], () => getTodoList({...query}))


    const handlePaging = (num) => {

        if(num === query.page){
            rq.refetch()
        }
        const obj = {page:num, size:query.size}

        setUrlSearchParams(obj)

    }

    return {rq,handlePaging}

}

export default useTodoList