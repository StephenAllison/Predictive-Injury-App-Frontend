import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import axios from "axios";
import AuthService from "./components/auth/auth-service";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AthleteList from "./components/AthleteList";
import AddAthlete from "./components/AddAthlete";
import EditAthlete from "./components/EditAthlete";

import Navbar from "./components/Navbar";
import AthleteDetails from "./components/AthleteFullDetails";

import { Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  logMeIn = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  getUserData() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }
  render() {
    this.fetchUser();
    return (
      <div className="App">
        {/* <Navbar
          setTheUserInTheAppComponent={this.logMeIn}
          userInSession={this.state.loggedInUser}
        /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login {...props} setTheUserInTheAppComponent={this.logMeIn} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup {...props} setTheUserInTheAppComponent={this.logMeIn} />
            )}
          />
          <Route
            exact
            path="/athletes"
            render={props => (
              <AthleteList {...props} theUser={this.getUserData()} />
            )}
          />
          <Route
            path="/EditAthlete/:id"
            render={props => (
              <EditAthlete {...props} theUser={this.getUserData()} />
            )}
          />
          />
          <Route
            exact
            path="/createNewUser"
            render={props => (
              <AddUser {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/createNewAthlete"
            render={props => (
              <AddAthlete {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/updateAthelete"
            render={props => (
              <EditAthlete {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/user/:id"
            render={props => (
              <EditUser {...props} theUser={this.state.loggedInUser} />
            )}
          />
          {/* <Route exact path="/athletes/:id" component={AthleteDetails} /> */}
          <Route exact path="/user/:id" component={EditUser} />
          <Route exact path="/users" component={UserList} />
        </Switch>
      </div>
    );
  }
}

export default App;
