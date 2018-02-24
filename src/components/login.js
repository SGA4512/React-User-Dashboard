import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
      loggedIn: false
    };
  }
  login = e => {
    e.preventDefault();
    axios
      .post("/login", {
        username: this.state.username,
        password: this.state.pass
      })
      .then(data => {
        localStorage.setItem("token", data.data);
        this.setState({ loggedIn: true });
      })
      .catch(err => console.log(err));
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.login}>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="pass" placeholder="password" />
          <button type="submit"> Submit </button>
        </form>
        {this.state.loggedIn ? <Redirect to="/success" /> : null}
      </div>
    );
  }
}

export default Login;
