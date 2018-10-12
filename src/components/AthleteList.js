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
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  // Float Left
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

            {/* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */}
          </div>
        </div>
      );
    } else if (this.props.theUser.staffingDivision === "MedStaff") {
      console.log(this.state);
      return (
        <div>
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  // Float Left
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
                              Physical Mediating Factor Score:
                              {athlete.physicalMediatingFactorScore}
                              Psychological Mediating Factor Score:
                              {athlete.psychologicalMediatingFactorScore}
                              Social Mediating Factor Score:
                              {athlete.socialMediatingFactorScore}
                              physical Moderating Factor Score :
                              {athlete.physicalModeratingFactorScore}
                              PsychologicalModeratingFactorScore:
                              {athlete.psychologicalModeratingFactorScore}
                              Social ModeratingFactor Score:
                              {athlete.socialModeratingFactorScore}
                              Injury Risk Score:
                              {athlete.injuryRiskScore}
                              Medical Note:
                              {athlete.medicalNote}
                              Overall Sociological Health:
                              {athlete.overallSociologicalHealth}
                              OoachingDecision:
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
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {this.state.listOfAthletes.map((athlete, index) => {
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
              </div>;
            })}
          </div>
        </div>
      );
    }
  }
}

export default AthleteList;
