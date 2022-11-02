import axios from "axios";
import {useLocation, useSearchParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import axioUtil from "../../apis/axiosUtil";


const getTodoList =  async (state) => {

    try {
        //console.log("state", state)

        const query = state.queryKey[2]

        console.log(state.queryKey[3])

        const {accessToken, refreshToken} = state.queryKey[3]

        console.log(accessToken)

        const res = await axioUtil.get(`http://localhost/api2/sampleTodos/list`, {params: query})

        return res.data
    }catch(err) {
        return Promise.reject(err)
    }
}

const useJWTTodoList = () => {

    const location = useLocation()
    const queryClient = useQueryClient()

    const locationState = location.state

    const [searchParams, setSearchParams]= useSearchParams()

    let tokens = JSON.parse(localStorage.getItem("login"))


    const queryParams = {
        page: parseInt(searchParams.get("page")||1),
        size: parseInt(searchParams.get("size") || 10)
    }

    const {isLoading, isFetching, data , isError} = useQuery(['jwtTodo','list', queryParams, tokens], getTodoList, {
        onSuccess: (data) => {

        },
        onError: err => {
            console.log("-----------------------------------------------")
            console.log(err.response.data.path === '/refreshTokens')

            if(err.response.data.path === '/refreshTokens'){


            }


            console.log("-----------------------------------------------")

        }
    } )


    return {isLoading, isFetching, isError, data, setSearchParams, locationState}
}

export default useJWTTodoList