import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import axios from "axios";
import AuthService from "./components/auth/auth-service";
import AthleteList from "./components/AthleteList";
// import Navbar from "./components/Navbar";
import AthleteDetails from "./components/AthleteFullDetails";
import AddAthlete from "./components/AddAthlete";
import AddUser from "./components/AddUser";
import EditAthlete from "./components/EditAthlete";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

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
            path="/login"
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
              <AthleteList {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/EditAthlete"
            render={props => (
              <EditAthlete {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route exact path="/athletes/:id" component={AthleteDetails} />
          <Route exact path="/createNewAthlete" component={AddAthlete} />
          <Route exact path="/createNewUser" component={AddUser} />
          <Route
            exact
            path="/updateAthleteProfile/:id"
            component={EditAthlete}
          />
          <Route exact path="//user/:id" component={EditUser} />
          <Route exact path="/users" component={UserList} />
        </Switch>
      </div>
    );
  }
}

export default App;
