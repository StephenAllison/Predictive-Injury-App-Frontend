// auth/auth-service.js

import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "/api",
      withCredentials: true
    });
    this.service = service;
  }

  signup = (
    imgPath,
    sport,
    league,
    team,
    staffingDivision,
    role,
    name,
    username,
    password
  ) => {
    return this.service
      .post("/signup", {
        imgPath,
        sport,
        league,
        team,
        staffingDivision,
        role,
        name,
        username,
        password
      })
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", {
        username,
        password
      })
      .then(response => {
        console.log(response, "This is the response =====>");
        return response.data;
      });
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };
}

export default AuthService;
