import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import {Login} from "../api";

export default () => {
    const [user, setuser] = useState(Login('tw@naver.co','123'));
    console.log(user);
    return (
        <LoginPresenter

        />
    );
};