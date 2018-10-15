// components/athlete/CreateNewUser.js

import React, { Component } from "react";
import axios from "axios";

class CreateNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: " ",
      sport: " ",
      league: " ",
      team: " ",
      staffingDivision: " ",
      role: " ",
      name: " "
      // username: " ",
      // password: " "
    };
  }

  handleChange = e => {
    switch (e.target.name) {
      case "imgPath":
        this.setState({ imgPath: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData();
    const {
      imgPath,
      sport,
      league,
      team,
      staffingDivision,
      role,
      name
      // username,
      // password
    } = this.state;
    formData.append("imgPath", imgPath);

    formData.append("sport", sport);

    formData.append("league", league);

    formData.append("team", team);

    formData.append("staffingDivision", staffingDivision);

    formData.append("role", role);

    formData.append("name", name);

    // formData.append("username", username);

    // formData.append("password", password);

    axios
      .post("http://localhost:5000/api/createNewUser", formData)
      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // //DEPLOY TO HEROKU
      // .post(`${process.env.REACT_APP_API_URL}/createNewUser`, formData)

      .then(() => {
        this.setState({
          imgPath: " ",
          sport: " ",
          league: " ",
          team: " ",
          staffingDivision: " ",
          role: " ",
          name: " "
          // username: " ",
          // password: " "
        });
      })
      .catch(error => console.log(error));
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Image:</label>
          <input
            type="file"
            name="imgPath"
            onChange={e => this.handleChange(e)}
          />{" "}
          <label>Sport:</label>
          <textarea
            name="sport"
            value={this.state.sport}
            onChange={e => this.handleChange(e)}
          />
          <label>League:</label>
          <textarea
            name="league"
            value={this.state.league}
            onChange={e => this.handleChange(e)}
          />
          <label>Staffing Division:</label>
          <textarea
            name="staffingDivision"
            value={this.state.staffingDivision}
            onChange={e => this.handleChange(e)}
          />
          <label>Role:</label>
          <textarea
            name="role"
            value={this.state.role}
            onChange={e => this.handleChange(e)}
          />
          <label>Name:</label>
          <textarea
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          {/* <label>Username:</label>
          <textarea
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <label>Password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          /> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateNewUser;
