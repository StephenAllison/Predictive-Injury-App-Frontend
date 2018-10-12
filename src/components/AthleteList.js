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
                  <CardDeck>
                    <Card>
                      <div key={athlete._id}>
                        <Link to={`/athletes/${athlete._id}`}>
                          <img src={athlete.imgPath} />
                          <CardBody>
                            {athlete.currentInjuryStatus}
                            <CardTitle>{athlete.name}</CardTitle>
                            <CardSubtitle>{athlete.position}</CardSubtitle>
                            <CardText>
                              Medical Note :{athlete.medicalNote}
                              Coaching Decision:
                              {athlete.coachingDecision}
                            </CardText>
                            <Button>Button</Button>
                          </CardBody>
                        </Link>
                      </div>
                    </Card>
                  </CardDeck>
                );
              })}

            {/* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */}
          </div>
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
                      <img src={athlete.imgPath} />
                      {/* <h4>{athlete.sport}</h4>
                      <h5>{athlete.league}</h5> */}
                      <h5>{athlete.team}</h5>
                      <h5>{athlete.name}</h5>
                      {/* <h5>{athlete.position}</h5> */}
                      <h5>{athlete.currentInjuryStatus}</h5>
                      <h4>{athlete.physicalMediatingFactorScore}</h4>
                      <h5>{athlete.psychologicalMediatingFactorScore}</h5>
                      <h5>{athlete.socialMediatingFactorScore}</h5>
                      <h5>{athlete.physicalModeratingFactorScore}</h5>
                      <h5>{athlete.psychologicalModeratingFactorScore}</h5>
                      <h5>{athlete.socialModeratingFactorScore}</h5>
                      <h5>{athlete.overallPhysiologicalHealth}</h5>
                      <h5>{athlete.overallPsychologicalHealth}</h5>
                      <h5>{athlete.overallSociologicalHealth}</h5>
                      <h5>{athlete.injuryRiskScore}</h5>
                      <h5>{athlete.medicalNote}</h5>
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
    } else {
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div key={athlete._id}>
                    <Link to={`/athletes/${athlete._id}`}>
                      {/* <h4>{athlete.sport}</h4>
                      <h5>{athlete.league}</h5>
                      <h5>{athlete.team}</h5> */}
                      <h5>{athlete.name}</h5>
                      <h5>{athlete.position}</h5>
                      <h5>{athlete.currentInjuryStatus}</h5>
                      {/* <h4>{athlete.physicalMediatingFactorScore}</h4>
                      <h5>{athlete.psychologicalMediatingFactorScore}</h5>
                      <h5>{athlete.socialMediatingFactorScore}</h5>
                      <h5>{athlete.physicalModeratingFactorScore}</h5>
                      <h5>{athlete.psychologicalModeratingFactorScore}</h5>
                      <h5>{athlete.socialModeratingFactorScore}</h5> */}
                      {/* <h5>{athlete.overallPhysiologicalHealth}</h5>
                      <h5>{athlete.overallPsychologicalHealth}</h5>
                      <h5>{athlete.overallSociologicalHealth}</h5>
                      <h5>{athlete.injuryRiskScore}</h5> */}
                      <h5>{athlete.medicalNote}</h5>
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
    }
  }
}
export default AthleteList;
