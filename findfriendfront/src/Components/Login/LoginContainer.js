import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../Hooks/useInput";

const LoginContainer =()=> {
    const [state,onChange]= useInput({
        email:'',
        password:''
    });

    const {email,password} =state;

    const onSubmit = async (e)=>{
        e.preventDefault();
        console.log(e);
    };

    return (
        <LoginPresenter
            onSubmit={onSubmit}
            email={email}
            password={password}
            onChange={onChange}
        />
    );
};

export default LoginContainer; 