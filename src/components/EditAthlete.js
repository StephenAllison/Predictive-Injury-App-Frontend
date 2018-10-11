import React, { Component } from "react";
import axios from "axios";

class EditAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: this.props.theAthlete.imgPath,
      sport: this.props.theAthlete.sport,
      league: this.props.theAthlete.title,
      team: this.props.theAthlete.team,
      name: this.props.theAthlete.name,
      position: this.props.theAthlete.position,
      injuryStatus: this.props.theAthlete.injuryStatus,
      physicalMediatingFactorScore: this.props.theAthlete
        .physicalMediatingFactorScore,
      psychologicalMediatingFactorScore: this.props.theAthlete
        .psychologicalMediatingFactorScore,
      socialMediatingFactorScore: this.props.theAthlete
        .socialMediatingFactorScore,
      physicalModeratingFactorScore: this.props.theAthlete
        .physicalModeratingFactorScore,
      psychologicalModeratingFactorScore: this.props.theAthlete
        .psychologicalModeratingFactorScore,
      socialModeratingFactorScore: this.props.theAthlete
        .socialModeratingFactorScore,
      riskLevel: this.props.theAthlete.riskLevel
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
        riskLevel,
        coachingDecision
      })
      .then(() => {
        this.props.getTheAthlete();
        // after submitting the form, redirect to '/athletes'
        this.props.history.push("/athletes");
      })
      .catch(error => console.log(error));
  };

  handleChangeImgPath = event => {
    this.setState({
      imgPath: event.target.value
    });
  };

  handleChangeSport = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleChangeLeague = event => {
    this.setState({
      league: event.target.value
    });
  };

  handleChangeTeam = event => {
    this.setState({
      team: event.target.value
    });
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeInjuryStatus = event => {
    this.setState({
      injuryStatus: event.target.value
    });
  };
  handleChangePhysicalMediatingFactorScore = event => {
    this.setState({
      physicalMediatingFactorScore: event.target.value
    });
  };

  handleChangePsychologicalMediatingFactorScore = event => {
    this.setState({
      psychologicalMediatingFactorScore: event.target.value
    });
  };

  handleChangeSocialMediatingFactorScore = event => {
    this.setState({
      socialMediatingFactorScore: event.target.value
    });
  };

  handleChangePhysicalModeratingFactorScore = event => {
    this.setState({
      physicalModeratingFactorScore: event.target.value
    });
  };

  handleChangePsychologicalModeratingFactorScore = event => {
    this.setState({
      psychologicalModeratingFactorScore: event.target.value
    });
  };

  handleChangeSocialModeratingFactorScore = event => {
    this.setState({
      socialModeratingFactorScore: event.target.value
    });
  };

  handleChangeInjuryRiskScore = event => {
    this.setState({
      injuryRiskScore: event.target.value
    });
  };

  handleChangeCoachingDecision = event => {
    this.setState({
      coachingDecision: event.target.value
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
