// components/UserList.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";

class UserList extends Component {
  constructor() {
    super();
    this.state = { listOfUsers: [] };
  }

  getAllUsers = () => {
    axios
      //DEPLOY LOCALLY
      // .get("http://localhost:5000/api/users")
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //DEPLOY TO HEROKU
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then(responseFromApi => {
        console.log("=-=-=-=-=-=-=-=-=-=", responseFromApi);

        this.setState({
          listOfUsers: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllUsers();
  }
  //Coaching Staff View
  render() {
    return (
      <div>
        <div>
          {this.state.listOfUsers &&
            this.state.listOfUsers.map((user, index) => {
              return (
                <div key={user._id}>
                  <Link to={`/users/${user._id}`}>
                    <img src={user.imgPath} />
                    <h3>{user.sport}</h3>
                    <h4>{user.league}</h4>
                    <h4>{user.team}</h4>
                    <h4>{user.staffingDivision}</h4>
                    <h5>{user.role}</h5>
                    <h5>{user.name}</h5>
                  </Link>
                  <p style={{ maxWidth: "400px" }}>{user.description} </p>
                </div>
              );
            })}
        </div>
        <div>
          <AddUser getData={() => this.getUsers()} />
        </div>
      </div>
    );
  }
}

export default UserList;
