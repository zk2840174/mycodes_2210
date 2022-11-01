import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {makeTokens} from "../apis/jwtLogin";


function LoginPage(props) {

    const [login, setLogin] = useState({mid:'', mpw:''})

    const handleChange = useCallback( (e) => {
        login[e.target.name] = e.target.value

        setLogin({...login})
    })

    const clickLogin = useCallback(() => {
        makeTokens(login).then(tokens => {
            console.log(tokens)
            localStorage.setItem("tokens", JSON.stringify(tokens))
        })
    })

    return (
        <div>
            <div>
                <TextField type={'text'} name={'mid'} onChange={handleChange}> </TextField>
            </div>
            <div>
                <TextField type={'text'} name={'mpw'} onChange={handleChange}> </TextField>
            </div>
            <div>
                <Button onClick={clickLogin}> LOGIN</Button>
            </div>
        </div>
    );
}

export default LoginPage;