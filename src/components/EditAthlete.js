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
    const imgPath = this.state.imgPath;
    const sport = this.state.sport;
    const league = this.state.league;
    const team = this.state.team;
    const name = this.state.name;
    const position = this.state.position;
    const currentInjuryStatus = this.state.currentInjuryStatus;
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
    const coachingDecision = this.state.coachingDecision;

    event.preventDefault();

    axios
      .put(`http://localhost:5000/api/athletes/${this.props.theAtlete._id}`)
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

  //   handleChangeSport = event => {
  //     this.setState({
  //       description: event.target.value
  //     });
  //   };

  //   handleChangeLeague = event => {
  //     this.setState({
  //       league: event.target.value
  //     });
  //   };

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
    if (this.props.theUser.staffingDivision === "Coaching Staff") {
    return (
    <div>
      <hr />
      <h3>Edit form</h3>
      <form onSubmit={this.handleFormSubmit}>
        <label>Image:</label>
        <input
          type="file"
          name="imgPath"
          value={this.state.imgPath}
          onChange={e => this.handleChangeImgPath(e)}
        />
        {/* <label>Sport:</label>
        <textarea
          name="sport"
          value={this.state.sport}
          onChange={e => this.handleChangeSport(e)}
        /> */}
        <label>League:</label>
        <input
          type="text"
          name="league"
          value={this.state.league}
          onChange={e => this.handleChangeLeague(e)}
        />
        <label>Team:</label>
        <textarea
          name="team"
          value={this.state.team}
          onChange={e => this.handleChangeTeam(e)}
        />
        {/* <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChangeName(e)}
        /> */}
        {/* <label>Injury Status:</label>
        <textarea
          name="injuryStatus"
          value={this.state.injuryStatus}
          onChange={e => this.handleChangeInjuryStatus(e)}
        /> */}
        {/* <label>Physiological Mediating Factor Score:</label>
        <input
          type="text"
          name="physicalMediatingFactorScore"
          value={this.state.physicalMediatingFactorScore}
          onChange={e => this.handleChangePhysicalMediatingFactorScore(e)}
        /> */}
        {/* <label>Psychological Mediating Factor Score:</label>
        <textarea
          name="psychologicalMediatingFactorScore"
          value={this.state.psychologicalMediatingFactorScore}
          onChange={e =>
            this.handleChangePsychologicalMediatingFactorScore(e)
          }
        /> */}
        {/* <label>Sociological MediatingFactor Score:</label>
        <input
          type="text"
          name="socialMediatingFactorScore"
          value={this.state.socialMediatingFactorScore}
          onChange={e => this.handleChangeSocialMediatingFactorScore(e)}
        /> */}
        {/* <label>Physiological Moderating Factor Score:</label>
        <textarea
          name="description"
          value={this.state.description}
          onChange={e => this.handleChangePhysicalModeratingFactorScore(e)}
        /> */}
        {/* <label>Psychological Moderating Factor Score:</label>
        <input
          type="text"
          name="psychologicalModeratingFactorScore"
          value={this.state.psychologicalModeratingFactorScore}
          onChange={e =>
            this.handleChangePsychologicalModeratingFactorScore(e)
          }
        /> */}
        {/* <label>Sociological Moderating Factor Score:</label>
        <textarea
          name="SocialModeratingFactorScore"
          value={this.state.SocialModeratingFactorScore}
          onChange={e => this.handleChangeSocialModeratingFactorScore(e)}
        /> */}
        {/* <label>Injury Risk Score:</label>
        <input
          type="text"
          name="injuryRiskScore"
          value={this.state.injuryRiskScore}
          onChange={e => this.handleChangeInjuryRiskScore(e)}
        /> */}
        <label>Coaching Decision:</label>
        <textarea
          name="coachingDecision"
          value={this.state.coachingDecision}
          onChange={e => this.handleChangeCoachingDecision(e)}
        />

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  } 
}

    } else if (this.props.theUser.staffingDivision === "Medical Staff") {
            return (
            <div>
          <hr />
          <h3>Edit form</h3>
          <form onSubmit={this.handleFormSubmit}>
            {/* <label>Image:</label>
            <input
              type="file"
              name="imgPath"
              value={this.state.imgPath}
              onChange={e => this.handleChangeImgPath(e)}
            /> */}
            {/* <label>Sport:</label>
            <textarea
              name="sport"
              value={this.state.sport}
              onChange={e => this.handleChangeSport(e)}
            /> */}
            {/* <label>League:</label>
            <input
              type="text"
              name="league"
              value={this.state.league}
              onChange={e => this.handleChangeLeague(e)}
            /> */}
            {/* <label>Team:</label>
            <textarea
              name="team"
              value={this.state.team}
              onChange={e => this.handleChangeTeam(e)}
            /> */}
            {/* <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChangeName(e)}
            /> */}
            <label>Injury Status:</label>
            <textarea
              name="injuryStatus"
              value={this.state.injuryStatus}
              onChange={e => this.handleChangeInjuryStatus(e)}
            />
            <label>Physiological Mediating Factor Score:</label>
            <input
              type="text"
              name="physicalMediatingFactorScore"
              value={this.state.physicalMediatingFactorScore}
              onChange={e => this.handleChangePhysicalMediatingFactorScore(e)}
            />
            <label>Psychological Mediating Factor Score:</label>
            <textarea
              name="psychologicalMediatingFactorScore"
              value={this.state.psychologicalMediatingFactorScore}
              onChange={e =>
                this.handleChangePsychologicalMediatingFactorScore(e)
              }
            />
            <label>Sociological MediatingFactor Score:</label>
            <input
              type="text"
              name="socialMediatingFactorScore"
              value={this.state.socialMediatingFactorScore}
              onChange={e => this.handleChangeSocialMediatingFactorScore(e)}
            />
            <label>Physiological Moderating Factor Score:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={e => this.handleChangePhysicalModeratingFactorScore(e)}
            />
            <label>Psychological Moderating Factor Score:</label>
            <input
              type="text"
              name="psychologicalModeratingFactorScore"
              value={this.state.psychologicalModeratingFactorScore}
              onChange={e =>
                this.handleChangePsychologicalModeratingFactorScore(e)
              }
            />
            <label>Sociological Moderating Factor Score:</label>
            <textarea
              name="SocialModeratingFactorScore"
              value={this.state.SocialModeratingFactorScore}
              onChange={e => this.handleChangeSocialModeratingFactorScore(e)}
            />
            <label>Injury Risk Score:</label>
            <input
              type="text"
              name="injuryRiskScore"
              value={this.state.injuryRiskScore}
              onChange={e => this.handleChangeInjuryRiskScore(e)}
            />
            <label>Injury Risk Level:</label>
            <input
              type="text"
              name="injuryRiskLevel"
              value={this.state.injuryRiskLevel}
              onChange={e => this.handleChangeInjuryRiskLevel(e)}
            />
            {/* <label>Coaching Decision:</label>
            <textarea
              name="coachingDecision"
              value={this.state.coachingDecision}
              onChange={e => this.handleChangeCoachingDecision(e)}
            /> */}
  
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  } 

  else (this.props.theUser.staffingDivision === "Coaching Staff") {
      return (
        <div>
          <hr />
          <h3>Edit form</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Image:</label>
            <input
              type="file"
              name="imgPath"
              value={this.state.imgPath}
              onChange={e => this.handleChangeImgPath(e)}
            />
            <label>Sport:</label>
            <textarea
              name="sport"
              value={this.state.sport}
              onChange={e => this.handleChangeSport(e)}
            />
  
            <label>League:</label>
            <input
              type="text"
              name="league"
              value={this.state.league}
              onChange={e => this.handleChangeLeague(e)}
            />
            <label>Team:</label>
            <textarea
              name="team"
              value={this.state.team}
              onChange={e => this.handleChangeTeam(e)}
            />
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChangeName(e)}
            />
            <label>Injury Status:</label>
            <textarea
              name="injuryStatus"
              value={this.state.injuryStatus}
              onChange={e => this.handleChangeInjuryStatus(e)}
            />
            <label>Physiological Mediating Factor Score:</label>
            <input
              type="text"
              name="physicalMediatingFactorScore"
              value={this.state.physicalMediatingFactorScore}
              onChange={e => this.handleChangePhysicalMediatingFactorScore(e)}
            />
            <label>Psychological Mediating Factor Score:</label>
            <textarea
              name="psychologicalMediatingFactorScore"
              value={this.state.psychologicalMediatingFactorScore}
              onChange={e =>
                this.handleChangePsychologicalMediatingFactorScore(e)
              }
            />
            <label>Sociological MediatingFactor Score:</label>
            <input
              type="text"
              name="socialMediatingFactorScore"
              value={this.state.socialMediatingFactorScore}
              onChange={e => this.handleChangeSocialMediatingFactorScore(e)}
            />
            <label>Physiological Moderating Factor Score:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={e => this.handleChangePhysicalModeratingFactorScore(e)}
            />
            <label>Psychological Moderating Factor Score:</label>
            <input
              type="text"
              name="psychologicalModeratingFactorScore"
              value={this.state.psychologicalModeratingFactorScore}
              onChange={e =>
                this.handleChangePsychologicalModeratingFactorScore(e)
              }
            />
            <label>Sociological Moderating Factor Score:</label>
            <textarea
              name="SocialModeratingFactorScore"
              value={this.state.SocialModeratingFactorScore}
              onChange={e => this.handleChangeSocialModeratingFactorScore(e)}
            />
            <label>Injury Risk Score:</label>
            <input
              type="text"
              name="injuryRiskScore"
              value={this.state.injuryRiskScore}
              onChange={e => this.handleChangeInjuryRiskScore(e)}
            />
            <label>Coaching Decision:</label>
            <textarea
              name="coachingDecision"
              value={this.state.coachingDecision}
              onChange={e => this.handleChangeCoachingDecision(e)}
            />
  
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }     

export default EditAthlete;
