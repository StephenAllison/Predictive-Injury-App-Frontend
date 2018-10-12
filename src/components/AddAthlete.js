// components/athlete/CreateNewAthlete.js

import React, { Component } from "react";
import axios from "axios";

class CreateNewAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: "",
      sport: "",
      league: "",
      team: "",
      name: "",
      position: "",
      injuryStatus: "",
      physicalMediatingFactorScore: "",
      psychologicalMediatingFactorScore: "",
      socialMediatingFactorScore: "",
      physicalModeratingFactorScore: "",
      psychologicalModeratingFactorScore: "",
      socialModeratingFactorScore: "",
      injuryRiskScore: "",
      medicalNote: "",
      coachingDecision: ""
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
      medicalNote,
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

    formData.append("medicalNote", medicalNote);

    formData.append("coachingDecision", coachingDecision);

    axios
      .post("http://localhost:5000/api/createNewAthlete", formData)
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
          medicalNote: "",
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
          <br />
          <input
            type="file"
            name="imgPath"
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Sport:</label>
          <br />
          <textarea
            name="sport"
            value={this.state.sport}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>League:</label>
          <br />
          <textarea
            name="league"
            value={this.state.league}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Team:</label>
          <br />
          <textarea
            name="team"
            value={this.state.team}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Name:</label>
          <br />
          <textarea
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Position:</label>
          <br />
          <textarea
            name="position"
            value={this.state.position}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Current Injury Status:</label>
          <br />
          <textarea
            name="currentInjuryStatus"
            value={this.state.currentInjuryStatus}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Physiological Mediating Factor Score:</label>
          <br />
          <textarea
            name="physicalMediatingFactorScore"
            value={this.state.physicalMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Psychological Mediating Factor Score:</label>
          <br />
          <textarea
            name="psychologicalMediatingFactorScore"
            value={this.state.psychologicalMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Sociological Mediating Factor Score:</label>
          <br />
          <textarea
            name="socialMediatingFactorScore"
            value={this.state.socialMediatingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <br />
          <label>Physiological Moderating Factor Score:</label>
          <textarea
            name="physicalModeratingFactorScore"
            value={this.state.physicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>psychologicalModeratingFactorScore:</label>
          <br />
          <textarea
            name="psychologicalModeratingFactorScore"
            value={this.state.psychologicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>psychologicalModeratingFactorScore:</label>
          <br />
          <textarea
            name="psychologicalModeratingFactorScore"
            value={this.state.psychologicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br /> <br />
          <br />
          <label>Injury Risk Score:</label>
          <textarea
            name="injuryRiskScore"
            value={this.state.injuryRiskScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Risk Level:</label>
          <br />
          <textarea
            name="medicalNote"
            value={this.state.medicalNote}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>coachingDecision:</label>
          <br />
          <textarea
            name="coachingDecision"
            value={this.state.coachingDecision}
            onChange={e => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateNewAthlete;
