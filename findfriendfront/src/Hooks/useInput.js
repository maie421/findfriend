/*import { useState } from "react"

export default defaultValue => {

    const [value,setValue] = useState(defaultValue);
    const onchange = (e) =>{
        const {
            target:{value}
        } = e;
        setValue(value);
    };
    return {value,onchange};

};*/
import {useReducer} from 'react';

const reducer=(state,action)=>{
    return {
        ...state,
        [action.name]: action.value
    };
}

export default (initialForm)=>{
    const [state,dispatch] = useReducer(reducer,initialForm);
    const onchange = e =>{
        console.log(e.target);
        dispatch(e.target);
    };
    return [state,onchange];
}