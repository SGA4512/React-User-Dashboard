import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
      err: "",
      loggedIn: false
    };
  }
  register = e => {
    e.preventDefault();
    axios
      .post("/register", {
        username: this.state.username,
        password: this.state.pass
      })
      .then(data => {
        localStorage.setItem("token", data.data);
        this.setState({
          loggedIn: true
        });
      })
      .catch(err => {
        this.setState({
          err: err.response.data.message
        });
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.register}>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="pass" placeholder="password" />
          <button type="submit"> Submit </button>
        </form>
        <div>
          {this.state.err &&
          this.state.err.name &&
          this.state.err.name["message"]
            ? this.state.err.name.message
            : null}
          {this.state.err &&
          this.state.err.password &&
          this.state.err.password["message"]
            ? this.state.err.password.message
            : null}
        </div>
        {this.state.loggedIn ? <Redirect to="/success" /> : null}
      </div>
    );
  }
}

export default Register;
