import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Route>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/join">Join</Link>
        </button>
      </Route>
    );
  }
}
export default App;