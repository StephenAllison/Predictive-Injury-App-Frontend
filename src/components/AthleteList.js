// components/athleteList.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddAthlete from "./AddAthlete";

class AthleteList extends Component {
  constructor() {
    super();
    this.state = { listOfAthletes: [] };
  }

  getAllAthletes = () => {
    axios
      .get("http://localhost:5000/api/athletes")
      .then(responseFromApi => {
        this.setState({
          listOfAthletes: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllAthletes();
  }
  //Coaching Staff View
  render() {
    return (
      <div>
        <div style>
          {this.state.listOfAthletes.map((athlete, index) => {
            return (
              <div key={athlete._id}>
                <Link to={`/athletes/${athlete._id}`}>
                  <h3>{athlete.imgPath}</h3>
                  <h3>{athlete.Team}</h3>
                  <h4>{athlete.name}</h4>
                  <h4>{athlete.position}</h4>
                  <h5>{athlete.injuryStatus}</h5>
                  <h5>{athlete.riskLevel}</h5>
                  <h5>{athlete.coachingDecision}</h5>
                </Link>
                <p style={{ maxWidth: "400px" }}>{athlete.description} </p>
              </div>
            );
          })}
        </div>
        <div>
          <AddAthlete getData={() => this.getAllAthletes()} />
        </div>
      </div>
    );
  }
  // //Medical Staff View
  // render() {
  //   return (
  //     <div>
  //       <div style>
  //         {this.state.listOfAthletes.map((athlete, index) => {
  //           return (
  //             <div key={athlete._id}>
  //               <Link to={`/athletes/${athlete._id}`}>
  //                 <h3>{athlete.imgPath}</h3>
  //                 <h3>{athlete.Team}</h3>
  //                 <h4>{athlete.name}</h4>
  //                 <h4>{athlete.position}</h4>
  //                 <h5>{athlete.currentInjuryStatus}</h5>
  //                 <h5>{athlete.physicalMediatingFactorScore}</h5>
  //                 <h5>{athlete.psychologicalMediatingFactorScore}</h5>
  //                 <h5>{athlete.socialMediatingFactorScore}</h5>
  //                 <h5>{athlete.physicalModeratingFactorScore}</h5>
  //                 <h5>{athlete.psychologicalModeratingFactorScore}</h5>
  //                 <h5>{athlete.socialModeratingFactorScore}</h5>
  //                 <h5>{athlete.injuryRiskScore}</h5>
  //                 <h5>{athlete.riskLevel}</h5>
  //                 <h5>{athlete.coachingDecision}</h5>
  //               </Link>
  //               {/* <p style={{ maxWidth: "400px" }}>{athlete.description} </p> */}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div>
  //         <AddAthlete getData={() => this.getAllAthletes()} />
  //       </div>
  //     </div>
  //   );
  // }
}

export default AthleteList;
