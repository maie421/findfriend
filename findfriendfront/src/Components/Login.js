import React from 'react';
import { Link, Route } from 'react-router-dom';

const Login = () => {
    return (
    <div class="p-4 m-4 bg-green-600">
        <Link to="/main">
            <button>
                확인
            </button>
        </Link>
        <Link to="/join">
            <button>
                Join
            </button>
        </Link>
    </div>
     );
 }
 
 export default Login;