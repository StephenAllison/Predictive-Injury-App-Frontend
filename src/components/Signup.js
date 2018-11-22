// auth/Signup.js

import React, { Component } from "react";
import AuthService from "./auth/auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: " ",
      sport: "",
      league: "",
      team: "",
      staffingDivision: "",
      role: "",
      name: "",
      username: "",
      password: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const imgPath = this.state.imgPath;
    const sport = this.state.sport;
    const league = this.state.league;
    const team = this.state.team;
    const staffingDivision = this.state.staffingDivision;
    const role = this.state.role;
    const name = this.state.name;
    const username = this.state.username;
    const password = this.state.password;
    // const img = this.state.img;

    this.service
      .signup(
        imgPath,
        sport,
        league,
        team,
        staffingDivision,
        role,
        name,
        username,
        password
        // img
      )
      .then(theUserObject => {
        this.setState({
          imgPath: " ",
          sport: "",
          league: "",
          team: "",
          staffingDivision: "",
          role: "",
          name: "",
          username: "",
          password: ""
          // img: ""
        });
        this.props.setTheUserInTheAppComponent(theUserObject);
        this.props.history.push("/");
        // console.log("++++++++++theUserObject++++++++", req.body);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   <select
  //   key={id}
  //   name={'document-'+ id}
  //   value={selectedValue}
  //   onChange = {(e) => this.saveSelectValue(e, id)}
  // >
  //   <option value="0">Please Select</option>
  //   <option value="1">Australia</option>
  //   <option value="2">France</option>
  //   <option value="3">United Kingdom</option>
  //   <option value="4">United States</option>
  // </select>

  render() {
    return (
      <div className="signupPage">
        <form onSubmit={this.handleFormSubmit}>
          <label>Image:</label>
          <br />
          <input
            type="file"
            name="imgPath"
            onChange={e => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          {/* <label>Sport:</label>
          <br />
          <input
            type="text"
            name="sport"
            value={this.state.sport}
            onChange={e => this.handleChange(e)}
          /> */}
          <div class="form-group">
            <label for="sport">SPORT</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="sport"
              value={this.state.sport}
              onChange={e => this.handleChange(e)}
            >
              <option sport="basketball">Basketball</option>
              <option sport="soccer">Soccer</option>
              <option sport="football">Football</option>
              <option sport="hockey">Hockey</option>
              <option sport="baseball">Baseball</option>
            </select>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label for="exampleFormControlSelect1">LEAGUE</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>NBA</option>
              <option>PREMIER</option>
              <option>NFL</option>
              <option>NHL</option>
              <option>MLB</option>
            </select>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label for="exampleFormControlSelect1">STAFFING DIVISION</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="staffingDivision"
              value={this.state.staffingDivision}
              onChange={e => this.handleChange(e)}
            >
              <option>COACHING STAFF</option>
              <option>MEDICAL STAFF</option>
              <option>EXECUTIVE STAFF</option>
            </select>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label for="exampleFormControlSelect1">ROLE</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>HEAD COACH</option>
              <option>ASSISTANT COACH</option>
              <option>ATHLETIC TRAINER</option>
              <option>TEAM PHYSICIAN</option>
              <option>GENERAL MANAGER</option>
              <option>TEAM PRESIDENT</option>
            </select>
          </div>
          {/* <label>League:</label>
          <br />
          <input
            type="text"
            name="league"
            value={this.state.league}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Team:</label>
          <br />
          <input
            type="text"
            name="team"
            value={this.state.team}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Staffing Division:</label>
          <br />
          <input
            type="text"
            name="staffingDivision"
            value={this.state.staffingDivision}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Role:</label>
          <br />
          <input
            type="text"
            name="role"
            value={this.state.role}
            onChange={e => this.handleChange(e)}
          /> */}
          <br />
          <br />
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}
export default Signup;
