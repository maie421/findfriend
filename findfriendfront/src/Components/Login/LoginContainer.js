import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../Hooks/useInput";
import { Login } from "../api";

/*axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const Login = (email, password) => {
	const data = {
		email,
		password,
	};
	axios.post('/login', data)
	.then(response => {
		//console.log(response.data.data);
		const { token } = response.data.data;
        
        console.log(token);
		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		// accessToken을 localStorage, cookie 등에 저장하지 않는다!
		
		//return response;
	}).catch(error => {
		// ... 에러 처리
		return error;
	});
}*/

const LoginContainer =()=> {
    const [state,onChange]= useInput({
        email:'',
        password:''
    });

    const {email,password} =state;

    const onSubmit = async (e)=>{
        e.preventDefault();
        const result=await Login(email,password);
        if(result==='success'){
            console.log(localStorage.getItem("token"));
        }
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