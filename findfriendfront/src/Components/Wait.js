import React from 'react';
import { Link, Route } from 'react-router-dom';

const Wait = () => {
    return (
        <>
        <div>
            <span>Waite Page</span>
        </div>
        <div>
        <Route>
            <Link to="/acceptmatching">
                <button>
                    매칭
                </button>
            </Link>
            </Route>
        </div>
        </>
     )
 }
 
 export default Wait;