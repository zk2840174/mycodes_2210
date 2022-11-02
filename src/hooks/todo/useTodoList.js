import {useLocation, useSearchParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";


const getTodoList =  async (state) => {

    //console.log("state", state)

    const query = state.queryKey[2];

    const res = await axios.get(`http://localhost/api/sampleTodos/list?page=${query.page}&size=${query.size}`)

    return res.data

}

const useTodoList = () => {

    const location = useLocation()

    const queryClient = useQueryClient()

    const locationState = location.state

    const [searchParams, setSearchParams]= useSearchParams()

    const queryParams = {page: parseInt(searchParams.get("page")||1), size: parseInt(searchParams.get("size") || 10)}

    const {isLoading, isFetching, data} = useQuery(['todo','list', queryParams], getTodoList, {
        onSuccess: (data) => {

        }
    } )


    return {isLoading, isFetching, data, setSearchParams, locationState}
}

export default useTodoList