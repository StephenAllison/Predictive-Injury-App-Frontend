// components/athlete/CreateNewUser.js

import React, { Component } from "react";
import axios from "axios";

class CreateNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: " ",
      sport: " ",
      league: " ",
      team: " ",
      staffingDivision: " ",
      role: " ",
      name: " ",
      username: " ",
      password: " "
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
      name,
      position,
      injuryStatus,
      physicalMediatingFactorScore,
      psychologicalMediatingFactorScore,
      socialMediatingFactorScore,
      physicalModeratingFactorScore,
      psychologicalModeratingFactorScore,
      socialModeratingFactorScore,
      injuryRiskScore,
      riskLevel,
      coachingDecision
    } = this.state;
    formData.append("imgPath", imgPath);

    formData.append("sport", sport);

    formData.append("league", league);

    formData.append("team", team);

    formData.append("name", name);

    formData.append("position", position);

    formData.append("injuryStatus", injuryStatus);

    formData.append(
      "physicalMediatingFactorScore",
      physicalMediatingFactorScore
    );

    formData.append(
      "psychologicalMediatingFactorScore",
      psychologicalMediatingFactorScore
    );

    formData.append("socialMediatingFactorScore", socialMediatingFactorScore);

    formData.append(
      "physicalModeratingFactorScore",
      physicalModeratingFactorScore
    );

    formData.append(
      "psychologicalModeratingFactorScore",
      psychologicalModeratingFactorScore
    );

    formData.append("socialModeratingFactorScore", socialModeratingFactorScore);

    formData.append("injuryRiskScore", injuryRiskScore);

    formData.append("riskLevel", riskLevel);

    formData.append("coachingDecision", coachingDecision);

    axios
      .post("http://localhost:5000/api/createNewUser", formData)
      .then(() => {
        this.setState({
          imgPath: "",
          sport: "",
          league: "",
          team: "",
          name: "",
          position: "",
          physicalMediatingFactorScore: "",
          psychologicalMediatingFactorScore: "",
          socialMediatingFactorScore: "",
          physicalModeratingFactorScore: "",
          psychologicalModeratingFactorScore: "",
          socialModeratingFactorScore: "",
          injuryRiskScore: "",
          riskLevel: "",
          coachingDecision: ""
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
          <label>Image</label>
          <input
            type="file"
            name="imgPath"
            onChange={e => this.handleChange(e)}
          />
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
          <label>Team:</label>
          <textarea
            name="team"
            value={this.state.team}
            onChange={e => this.handleChange(e)}
          />
          <label>Name:</label>
          <textarea
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Position:</label>
          <textarea
            name="position"
            value={this.state.position}
            onChange={e => this.handleChange(e)}
          />
          <label>Current Injury Status:</label>
          <textarea
            name="currentInjuryStatus"
            value={this.state.currentInjuryStatus}
            onChange={e => this.handleChange(e)}
          />
          <label>Physiological Mediating Factor Score:</label>
          <textarea
            name="physicalMediatingFactorScore"
            value={this.state.physicalMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <label>Psychological Mediating Factor Score:</label>
          <textarea
            name="psychologicalMediatingFactorScore"
            value={this.state.psychologicalMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <label>Sociological Mediating Factor Score:</label>
          <textarea
            name="socialMediatingFactorScore"
            value={this.state.socialMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <label>Physiological Moderating Factor Score:</label>
          <textarea
            name="physicalModeratingFactorScore"
            value={this.state.physicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <label>psychologicalModeratingFactorScore:</label>
          <textarea
            name="psychologicalModeratingFactorScore"
            value={this.state.psychologicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <label>Injury Risk Score:</label>
          <textarea
            name="injuryRiskScore"
            value={this.state.injuryRiskScore}
            onChange={e => this.handleChange(e)}
          />
          <label>Risk Level:</label>
          <textarea
            name="riskLevel"
            value={this.state.riskLevel}
            onChange={e => this.handleChange(e)}
          />
          <label>coachingDecision:</label>
          <textarea
            name="coachingDecision"
            value={this.state.coachingDecision}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateNewUser;
