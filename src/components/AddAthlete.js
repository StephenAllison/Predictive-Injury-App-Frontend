// components/athlete/CreateNewAthlete.js

import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class CreateNewAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: " ",
      sport: " ",
      league: " ",
      team: " ",
      name: " ",
      position: " ",
      physicalMediatingFactorScore: " ",
      psychologicalMediatingFactorScore: " ",
      socialMediatingFactorScore: " ",
      physicalModeratingFactorScore: " ",
      psychologicalModeratingFactorScore: " ",
      socialModeratingFactorScore: " ",
      overallPhysiologicalHealth: " ",
      overallPPsychologicalHealth: " ",
      overallSociologicalHealth: " ",
      injuryRiskScore: " ",
      medicalNote: " ",
      coachingDecision: " "
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
      overallPhysiologicalHealth,
      overallPsychologicalHealth,
      overallSociologicalHealth,
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

    formData.append("overallPhysiologicalHealth", overallPhysiologicalHealth);

    formData.append("overallPsychologicalHealth", overallPsychologicalHealth);

    formData.append("overallSociologicalHealth", overallSociologicalHealth);

    formData.append("injuryRiskScore", injuryRiskScore);

    formData.append("medicalNote", medicalNote);

    formData.append("coachingDecision", coachingDecision);

    axios
      //DEPLOY LOCALLY
      // .post("http://localhost:5000/api/createNewAthlete", formData)
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //DEPLOY TO HEROKU
      .post(`${process.env.REACT_APP_API_URL}/createNewAthlete`, formData)
      .then(() => {
        this.setState({
          imgPath: " ",
          sport: " ",
          league: " ",
          team: " ",
          name: " ",
          position: " ",
          physicalMediatingFactorScore: " ",
          psychologicalMediatingFactorScore: " ",
          socialMediatingFactorScore: " ",
          physicalModeratingFactorScore: " ",
          psychologicalModeratingFactorScore: " ",
          socialModeratingFactorScore: " ",
          overallPhysiologicalHealth: " ",
          overallPsychologicalHealth: " ",
          overallSociologicalHealth: " ",
          injuryRiskScore: " ",
          medicalNote: " ",
          coachingDecision: " "
        });
      })
      .catch(error => console.log(error));
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div class="addAthlete">
          <label>Image</label>
          <br />
          <input
            type="file"
            name="imgPath"
            onChange={e => this.handleChange(e)}
          />{" "}
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
          <br />
          <textarea
            name="physicalModeratingFactorScore"
            value={this.state.physicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Psychological Moderating Factor Score:</label>
          <br />
          <textarea
            name="psychologicalModeratingFactorScore"
            value={this.state.psychologicalModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Sociological Moderating FactorScore:</label>
          <br />
          <textarea
            name="socialModeratingFactorScore"
            value={this.state.socialModeratingFactorScore}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Overall Physiological Health:</label>
          <br />
          <textarea
            name="overallPhysiologicalHealth"
            value={this.state.overallPhysiologicalHealth}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Overall Psychological Health</label>
          <br />
          <textarea
            name="overallPsychologicalHealth"
            value={this.state.overallPsychologicalHealth}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Overall Sociological Health:</label>
          <br />
          <textarea
            name="overallSociologicalHealth"
            value={this.state.overallSociologicalHealth}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <br />
          <label>Injury Risk Score:</label>
          <br />
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
          <label>Coaching Decision:</label>
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
        </div>
      </form>
    );
  }
}

export default CreateNewAthlete;
