import {useParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";


const getTodo = async (state) => {

    const id = state.queryKey[1]

    const res = await axios.get(`http://localhost/api/sampleTodos/${id}`)

    return res.data

}


const useTodoRead = (option) => {

    const queryClient = useQueryClient()

    const {id} = useParams()

    const options = {staleTime: 1000}

    if(option && option.hold){
        options.staleTime = Infinity
    }

    const {isLoading,isFetching,data} = useQuery(['todo', parseInt(id)], getTodo, options)

    return {isLoading,isFetching,data}
}


export default useTodoRead