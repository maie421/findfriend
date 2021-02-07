import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './Components/App';
import Wait from "./Components/Wait";
import AcceptMatching from "./Components/AcceptMatching";
import Main from "./Components/Main";
import Join from './Components/Join';
import Login from './Components/Login';
import {Container} from '@material-ui/core';
import Header from "./Components/Header";

const Routes = () => {
  const [login,getlogin] = useState(false);
    useEffect(() => {
      // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
      
    if(localStorage?.getItem("token")!=null){
      console.log(localStorage?.getItem("token"));
      getlogin(true);
    }
    },[]);
    return (
      <>
      <Header/>
      <Container maxWidth="sm">
      <Router>
        <Switch>
            {login?
            (<>
            <Route exact path="/" component={Main} />
            <Route exact path="/wait" component={Wait} />
            <Route exact path="/acceptmatching" component={AcceptMatching} />
            </>)
            :
            (<>
            <Route exact path="/" component={Login} />
            <Route exact path="/join" component={Join} />
            </>)
            }
        </Switch>
      </Router>
      </Container>
      </>
    )
}

export default Routes;