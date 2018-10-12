// components/athleteList.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import AthleteList from "./Athletes";

class AthleteList extends Component {
  constructor() {
    super();
    this.state = { listOfAthletes: [] };
  }

  getAllAthletes = () => {
    axios
      .get("http://localhost:5000/api/athletes")
      .then(responseFromApi => {
        console.log("=-=-=-=-=-=-=-=-=-=", responseFromApi);

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

  componentDidMount() {
    this.getAllAthletes();
  }

  render() {
    console.log("=-=-=-=-=--=-=-=-", this.props);

    if (this.props.theUser.staffingDivision === "Coaching Staff") {
      console.log("AAAAAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA");
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div key={athlete._id}>
                    <Link to={`/athletes/${athlete._id}`}>
                      <img src={athlete.imgPath} />
                      <h4>{athlete.team}</h4>
                      <h5>{athlete.name}</h5>
                      <h5>{athlete.position}</h5>
                      <h5>{athlete.currentInjuryStatus}</h5>
                      <h5>{athlete.riskLevel}</h5>
                      <h5>{athlete.coachingDecision}</h5>
                    </Link>
                  </div>
                );
              })}
          </div>
          {/* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */}
        </div>
      );
    } else if (this.props.theUser.staffingDivision === "Medical Staff") {
      console.log("Yes");
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div key={athlete._id}>
                    <Link to={`/athletes/${athlete._id}`}>
                      <div>
                        <form onSubmit={this.handleFormSubmit}>
                          <label>Image</label>
                          <input
                            type="file"
                            name="imgPath"
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <br />
                          <label>Name:</label>
                          <textarea
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Current Injury Status:</label>
                          <textarea
                            name="currentInjuryStatus"
                            value={this.state.currentInjuryStatus}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Physiological Mediating Factor Score:</label>
                          <textarea
                            name="physicalMediatingFactorScore"
                            value={this.state.physicalMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Psychological Mediating Factor Score:</label>
                          <textarea
                            name="psychologicalMediatingFactorScore"
                            value={this.state.psychologicalMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Sociological Mediating Factor Score:</label>
                          <textarea
                            name="socialMediatingFactorScore"
                            value={this.state.socialMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Physiological Moderating Factor Score:</label>
                          <textarea
                            name="physicalModeratingFactorScore"
                            value={this.state.physicalModeratingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>psychologicalModeratingFactorScore:</label>
                          <textarea
                            name="psychologicalModeratingFactorScore"
                            value={
                              this.state.psychologicalModeratingFactorScore
                            }
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Injury Risk Score:</label>
                          <textarea
                            name="injuryRiskScore"
                            value={this.state.injuryRiskScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Risk Level:</label>
                          <textarea
                            name="riskLevel"
                            value={this.state.riskLevel}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>coachingDecision:</label>
                          <textarea
                            name="coachingDecision"
                            value={this.state.coachingDecision}
                            onChange={e => this.handleChange(e)}
                          />
                          <input type="submit" value="Submit" />
                        </form>
                      </div>
                      ); }
                    </Link>
                    {/* <p style={{ maxWidth: "400px" }}>{athlete.description} </p> */}
                  </div>
                );
              })}
          </div>
          {/* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */}
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div key={athlete._id}>
                    <Link to={`/athletes/${athlete._id}`}>
                      <div>
                        <form onSubmit={this.handleFormSubmit}>
                          <label>Image</label>
                          <input
                            type="file"
                            name="imgPath"
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Name:</label>
                          <textarea
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Position:</label>
                          <textarea
                            name="position"
                            value={this.state.position}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Current Injury Status:</label>
                          <textarea
                            name="currentInjuryStatus"
                            value={this.state.currentInjuryStatus}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Physiological Mediating Factor Score:</label>
                          <textarea
                            name="physicalMediatingFactorScore"
                            value={this.state.physicalMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Psychological Mediating Factor Score:</label>
                          <textarea
                            name="psychologicalMediatingFactorScore"
                            value={this.state.psychologicalMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Sociological Mediating Factor Score:</label>
                          <textarea
                            name="socialMediatingFactorScore"
                            value={this.state.socialMediatingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Physiological Moderating Factor Score:</label>
                          <textarea
                            name="physicalModeratingFactorScore"
                            value={this.state.physicalModeratingFactorScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Psychological Moderating Factor Score:</label>
                          <textarea
                            name="psychologicalModeratingFactorScore"
                            value={
                              this.state.psychologicalModeratingFactorScore
                            }
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Sociological Moderating Factor Score:</label>
                          <textarea
                            name="psychologicalModeratingFactorScore"
                            value={
                              this.state.psychologicalModeratingFactorScore
                            }
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Injury Risk Score:</label>
                          <textarea
                            name="injuryRiskScore"
                            value={this.state.injuryRiskScore}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>Risk Level:</label>
                          <textarea
                            name="riskLevel"
                            value={this.state.riskLevel}
                            onChange={e => this.handleChange(e)}
                          />
                          <br />
                          <label>coachingDecision:</label>
                          <textarea
                            name="coachingDecision"
                            value={this.state.coachingDecision}
                            onChange={e => this.handleChange(e)}
                          />
                          <input type="submit" value="Submit" />
                        </form>
                      </div>
                    </Link>
                    {/* <p style={{ maxWidth: "400px" }}>{athlete.description} </p> */}
                  </div>
                );
              })}
          </div>
          {/* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */}
        </div>
      );
    }
  }
}

export default AthleteList;
