import {useCallback, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const postLogin = async (loginInfo) => {

    const res = await axios.post("http://localhost/makeTokens", loginInfo)

    return res.data
}


const useLogin = () => {

    const [login, setLogin] = useState({mid:'', mpw:''})
    const [flag, setFlag] = useState(false)


    const query = useQuery(['login'], postLogin, {enabled:flag, staleTime:Infinity, onSuccess:(data) => {

        console.log(data)

        localStorage.setItem("login", JSON.stringify(data))

        setFlag(false)

    }}
    )

    const handleChange = useCallback( (e) => {
        login[e.target.name] = e.target.value
        setLogin({...login})
    })

    const clickLogin = useCallback(() => {

        setFlag(true)

    })

    return {handleChange, clickLogin}

}

export default  useLogin