import React from 'react';
import { Link, Route } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <div>
            <span>Main Page</span>
        </div>
        <div>
            <Route>
                <Link to="/wait">
                    <button>
                        매칭
                    </button>
                </Link>
            </Route>
        </div>
        </>
     )
 }
 
 export default Main;