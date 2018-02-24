import React, { Component } from "react";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/register";
import Success from "./components/success";
import AuthRoute from "./checkAuth";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/success">Success</Link>
            </li>
          </ul>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <AuthRoute path="/success" component={Success} />
        </div>
      </Router>
    );
  }
}

export default App;
