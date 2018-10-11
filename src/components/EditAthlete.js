import React, { Component } from "react";
import axios from "axios";

class EditAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: this.props.theAtlete.imgPath,
      sport: this.props.theAtlete.sport,
      league: this.props.theAtlete.title,
      team: this.props.theAtlete.team,
      name: this.props.theAtlete.name,
      position: this.props.theAtlete.position,
      injuryStatus: this.props.theAtlete.injuryStatus,
      physicalMediatingFactorScore: this.props.theAtlete
        .physicalMediatingFactorScore,
      psychologicalMediatingFactorScore: this.props.theAtlete
        .psychologicalMediatingFactorScore,
      socialMediatingFactorScore: this.props.theAtlete
        .socialMediatingFactorScore,
      physicalModeratingFactorScore: this.props.theAtlete
        .physicalModeratingFactorScore,
      psychologicalModeratingFactorScore: this.props.theAtlete
        .psychologicalModeratingFactorScore,
      socialModeratingFactorScore: this.props.theAtlete
        .socialModeratingFactorScore,
      riskLevel: this.props.theAtlete.riskLevel
    };
  }

  handleFormSubmit = event => {
    const imgPath = this.state.imgPath;
    const sport = this.state.sport;
    const league = this.state.league;
    const team = this.state.team;
    const name = this.state.name;
    const position = this.state.position;
    const injuryStatus = this.state.injuryStatus;
    const physicalMediatingFactorScore = this.state
      .physicalMediatingFactorScore;
    const psychologicalMediatingFactorScore = this.state
      .psychologicalMediatingFactorScore;
    const socialMediatingFactorScore = this.state.socialMediatingFactorScore;
    const physicalModeratingFactorScore = this.state
      .physicalModeratingFactorScore;
    const psychologicalModeratingFactorScore = this.state
      .psychologicalModeratingFactorScore;
    const socialModeratingFactorScore = this.state.socialModeratingFactorScore;
    const injuryRiskScore = this.state.injuryRiskScore;
    const riskLevel = this.state.riskLevel;

    event.preventDefault();

    axios
      .put(`http://localhost:5000/api/athlets/${this.props.theAtlete._id}`, {
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
        riskLevel
      })
      .then(() => {
        this.props.getTheAthlete();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/projects");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeDesc = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditAthlete;
