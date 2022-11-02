import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@mui/material";
import useLogin from "../hooks/useLogin";


function LoginPage(props) {

   const {handleChange, clickLogin} = useLogin()

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