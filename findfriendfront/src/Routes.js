import React from 'react';
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


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/main" component={Main} />
	          <Route exact path="/" component={Login} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/wait" component={Wait} />
            <Route exact path="/acceptmatching" component={AcceptMatching} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;