// auth/Signup.js

import React, { Component } from "react";
import AuthService from "./auth/auth-service";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        }); //OOOOOH!!!!!! ///an S on athlete
        this.props.setTheUserInTheAppComponent(response);
        console.log(response());
        ///did not help

        this.props.history.push(`/athletes`); //+
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="loginPage-Home">
        <form onSubmit={this.handleFormSubmit}>
          <h1>Predictive Sport Injury App</h1>
          <br />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />

          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Login" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <p>
          Don't have an account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default Login;
