// components/athleteList.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import UserList from "./UserList";

// import AthleteList from "./Athletes";

class AthleteList extends Component {
  constructor() {
    super();

    this.state = {
      listOfAthletes: [],
      name: "",
      position: "",
      coachingDecision: "",
      medicalNote: "",
      injuryStatus: "",
      currentAthleteId: "",
      message: ""
    };
  }
  clean = obj => {
    for (var propName in obj) {
      if (obj[propName] === "" || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  };

  handleChange = (e, id) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
        currentAthleteId: id
      },
      () => {
        console.log(this.state, "new state =====>");
      }
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let atheleteInfo = {};

    // this.state.listOfAthletes.map(user => {
    //   if (user._id === this.state.currentAthleteId) {
    //     console.log(this.state, "old state ===>");
    //     atheleteInfo = Object.assign(user, this.clean(this.state));
    //   }
    // });
    console.log(this.clean(this.state), "athlete info =======");
    const submitData = this.clean(this.state);
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    axios
      // //DEPLOY LOCALLY
      .patch(
        `/api/updateAthleteProfile/${this.state.currentAthleteId}`,
        submitData
      )
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // DEPLOY TO HEROKU
      // .put(
      //   `${process.env.REACT_APP_API_URL}/athletes${this.props.theAtlete._id}`

      .then(() => {
        this.setState({
          message: "User updated successfully!"
        });
        this.props.getAllAthletes;
        // after submitting the form, redirect to '/athletes'
        this.props.history.push("/athletes");
      })
      .catch(error => console.log(error));
  };

  getAllAthletes = () => {
    axios
      // DEPLOY LOCALLY
      .get("/api/athletes")
      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // //DEPLOY TO HEROKU
      // .get(`${process.env.REACT_APP_API_URL}/athletes`)

      .then(responseFromApi => {
        this.setState({
          listOfAthletes: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //Coaching Staff View
  userRenders() {}

  componentWillMount() {
    const isLoggedIn = localStorage.getItem("userData");
    if (!isLoggedIn) {
      window.location = "/";
    }
  }

  componentDidMount() {
    this.getAllAthletes();
  }

  logoutUser = () => {
    localStorage.removeItem("userData");
    this.props.history.push("/");
  };

  deleteAthlete = id => {
    axios.delete(`/api/deleteAthlete/${id}`).then(() => {
      this.setState({
        message: "User deleted succesfully!!!"
      });

      this.getAllAthletes();
    });
  };

  render() {
    if (this.props.theUser.staffingDivision === "Coaching Staff") {
      return (
        <div>
          {this.state.message}
          <br />
          <button
            onClick={this.logoutUser}
            style={{
              float: "right"
            }}
          >
            Logout
          </button>
          <button onClick={() => this.props.history.push("/createNewAthlete")}>
            Add athlete
          </button>
          <br />
          <div class="athletes">
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  // Float Left
                  <div className="card" key={athlete._id}>
                    <div>
                      <input
                        onChange={(e, id) => this.handleChange(e, athlete._id)}
                        name="name"
                        type="text"
                        defaultValue={athlete.name}
                      />
                      <br />
                      {/* Injury Status:
                        <input
                          type="text"
                          defaultValue={athlete.currentInjuryStatus} */}
                      {/* s */}
                      <br />
                      <img src={athlete.imgPath} />
                      <div>
                        Position:
                        <input
                          onChange={(e, id) =>
                            this.handleChange(e, athlete._id)
                          }
                          name="position"
                          type="text"
                          defaultValue={athlete.position}
                        />
                        <p>
                          Medical Note :{athlete.medicalNote}
                          <br />
                          Coaching Decision:
                          <input
                            onChange={(e, id) =>
                              this.handleChange(e, athlete._id)
                            }
                            name="coachingDecision"
                            type="text"
                            defaultValue={athlete.coachingDecision}
                          />
                          <br />
                        </p>
                      </div>
                      <button onClick={this.handleFormSubmit}>Submit</button>
                      <button onClick={id => this.deleteAthlete(athlete._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}

            <div>
              {/* <AddAthlete getData={() => this.getAllAthletes()} /> */}
            </div>
          </div>
        </div>
      );
    } else if (this.props.theUser.staffingDivision === "MedStaff") {
      console.log(this.state);
      return (
        <div>
          <button
            onClick={this.logoutUser}
            style={{
              float: "right"
            }}
          >
            Logout
          </button>
          <div class="athletes">
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  // Float Left
                  <div className="Card">
                    <div className="card" key={athlete._id}>
                      <div>
                        {athlete.name}
                        <br />
                        {/* Injury Status:
                        <input
                          type="text"
                          defaultValue={athlete.currentInjuryStatus} */}
                        {/* s */}
                        <br />
                        <img src={athlete.imgPath} />
                        <div>
                          {athlete.position}
                          <br />
                          <p>
                            Current Injury Status:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="currentInjuryStatus"
                              type="text"
                              defaultValue={athlete.currentInjuryStatus}
                            />
                            <br />
                            Physical Mediating Factor Score:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="physicalMediatingFactorScore"
                              type="text"
                              defaultValue={
                                athlete.physicalMediatingFactorScore
                              }
                            />
                            <br />
                            Psychological Mediating FactorScore:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="psychologicalMediatingFactorScore"
                              type="text"
                              defaultValue={
                                athlete.psychologicalMediatingFactorScore
                              }
                            />
                            <br />
                            Social Mediating Factor Score:{" "}
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="socialMediatingFactorScore"
                              type="text"
                              defaultValue={athlete.socialMediatingFactorScore}
                            />
                            <br />
                            Physical Moderating FactorScore:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="physicalModeratingFactorScore"
                              type="text"
                              defaultValue={
                                athlete.physicalModeratingFactorScore
                              }
                            />
                            <br />
                            Psychological Moderating Factor Score:{" "}
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="psychologicalModeratingFactorScore"
                              type="text"
                              defaultValue={
                                athlete.psychologicalModeratingFactorScore
                              }
                            />
                            <br />
                            socialModeratingFactorScore:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="socialModeratingFactorScore"
                              type="text"
                              defaultValue={athlete.socialModeratingFactorScore}
                            />
                            <br />
                            Overall Physiological Health:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="overallPhysiologicalHealth"
                              type="text"
                              defaultValue={athlete.overallPhysiologicalHealth}
                            />
                            <br />
                            Overall Psychological Health:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="overallPsychologicalHealth"
                              type="text"
                              defaultValue={athlete.overallPsychologicalHealth}
                            />
                            <br />
                            Overall Sociological Health:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="overallSociologicalHealth"
                              type="text"
                              defaultValue={athlete.overallSociologicalHealth}
                            />
                            <br />
                            Injury Risk Score:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="injuryRiskScore"
                              type="text"
                              defaultValue={athlete.injuryRiskScore}
                            />
                            <br />
                            Medical Note:
                            <input
                              onChange={(e, id) =>
                                this.handleChange(e, athlete._id)
                              }
                              name="medicalNote"
                              type="text"
                              defaultValue={athlete.medicalNote}
                            />
                            <br />
                            Coaching Decision :{athlete.coachingDecision}
                            <br />
                          </p>
                        </div>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    } else {
      return {
        /* <h1>Hello world</h1> */
      };
      /* <div>
          <div className="card">
            {true &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div>
                    <div>
                      <div key={athlete._id}>
                        <Link to={`/athletes/${athlete._id}`}>
                          <h1>{athlete.name}</h1>
                          <h3>{athlete.currentInjuryStatus}</h3>
                          {athlete.currentInjuryStatus}
                          <img src={athlete.imgPath} />
                          <div>
                            <h3>{athlete.position}</h3>
                            <p>
                              Medical Note :{athlete.medicalNote}
                              <br />
                              Coaching Decision:
                              {athlete.coachingDecision}
                              <br />
                            </p>
                            <Button>Button</Button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */
    }
  }
}

export default AthleteList;
