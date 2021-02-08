import React, { useState } from "react";
import JoinPresenter from "./JoinPresenter";
import useInput from "../../Hooks/useInput";
import { Join } from "../api";

const JoinContainer =()=> {
    const [state,onChange]= useInput({
        name:'',
        email:'',
        password:'',
        c_password:'',
    });

    const {name,email,password,c_password} =state;

    const onSubmit = async (e)=>{
        e.preventDefault();
        
        await Join(name,email,password,c_password);
        if(localStorage.getItem("token")==null){
            window.alert("중복된 이메일이 존재합니다.");
        }else{
            window.location.replace("/");
            localStorage.setItem("token",localStorage.getItem("token"));
        }
    };

    return (
        <JoinPresenter
            onSubmit={onSubmit}
            name={name}
            email={email}
            password={password}
            c_password={c_password}
            onChange={onChange}
        />
    );
};

export default JoinContainer; 