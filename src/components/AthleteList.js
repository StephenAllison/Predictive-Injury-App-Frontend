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
                  <div>
                    <div>
                      <div key={athlete._id}>
                        <Link to={`/athletes/${athlete._id}`}>
                          {athlete.currentInjuryStatus}
                          <img src={athlete.imgPath} />
                          <div>
                            {athlete.currentInjuryStatus}
                            <h1>{athlete.name}</h1>
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
      console.log("AAAAAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA", this.state);
      return (
        <div>
          wowowowowowowowowowow
          <div>
            {this.state.listOfAthletes &&
              this.state.listOfAthletes.map((athlete, index) => {
                return (
                  <div class="row">
                    <div class="col s12 m6">
                      <div class="card">
                        div key=
                        {athlete._id}>
                        <Link to={`/athletes/${athlete._id}`}>
                          {athlete.currentInjuryStatus}
                          <img src={athlete.imgPath} />
                          <span class="card-title">{athlete.name}</span>
                          <a class="btn-floating halfway-fab waves-effect waves-light red">
                            <i class="material-icons">{athlete.position}</i>
                          </a>
                          <div class="card-content">
                            <p>
                              Medical Note :{athlete.medicalNote}
                              <br />
                              Coaching Decision:
                              {athlete.coachingDecision}
                              <br />
                            </p>
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
    }

    {
      /* console.log("Yes");
      return (
        <div>
          <div>
            {this.state.listOfAthletes && */
    }
    {
      /* //           this.state.listOfAthletes.map((athlete, index) => { */
    }
    {
      /* //             return (
    //               <div key={athlete._id}>
    //                 <Link to={`/athletes/${athlete._id}`}>
    //                   <img src={athlete.imgPath} />
    //                   {/* <h4>{athlete.sport}</h4>
    //                   <h5>{athlete.league}</h5> */
    }
    {
      /* //                   <h5>{athlete.team}</h5>
    //                   <h5>{athlete.name}</h5>
    //                   {/* <h5>{athlete.position}</h5> */
    }
    {
      /* //                   <h5>{athlete.currentInjuryStatus}</h5>
    //                   <h4>{athlete.physicalMediatingFactorScore}</h4>
    //                   <h5>{athlete.psychologicalMediatingFactorScore}</h5>
    //                   <h5>{athlete.socialMediatingFactorScore}</h5>
    //                   <h5>{athlete.physicalModeratingFactorScore}</h5>
    //                   <h5>{athlete.psychologicalModeratingFactorScore}</h5>
    //                   <h5>{athlete.socialModeratingFactorScore}</h5>
    //                   <h5>{athlete.overallPhysiologicalHealth}</h5>
    //                   <h5>{athlete.overallPsychologicalHealth}</h5>
    //                   <h5>{athlete.overallSociologicalHealth}</h5>
    //                   <h5>{athlete.injuryRiskScore}</h5>
    //                   <h5>{athlete.medicalNote}</h5>
    //                   <h5>{athlete.coachingDecision}</h5>
    //                 </Link> */
    }
    {
      /* //               </div>
    //             );
    //           })}
    {/* //       </div> */
      //       {/* <div> */}
      /* //         <AddAthlete getData={() => this.getAllAthletes()} />
    //       </div> */
      //     </div> */}
      //   );
      // } else {
      // return (
      //   <div>
      //     <div>
      //       {this.state.listOfAthletes &&
      //         this.state.listOfAthletes.map((athlete, index) => {
      //           return (
      //             <div key={athlete._id}>
      //               <Link to={`/athletes/${athlete._id}`}>
      {
        /* <h4>{athlete.sport}</h4>
                      <h5>{athlete.league}</h5>
                      <h5>{athlete.team}</h5> */
      }
      {
        /* <h5>{athlete.name}</h5>
                      <h5>{athlete.position}</h5>
                      <h5>{athlete.currentInjuryStatus}</h5> */
      }
      {
        /* <h4>{athlete.physicalMediatingFactorScore}</h4>
                      <h5>{athlete.psychologicalMediatingFactorScore}</h5>
                      <h5>{athlete.socialMediatingFactorScore}</h5>
                      <h5>{athlete.physicalModeratingFactorScore}</h5>
                      <h5>{athlete.psychologicalModeratingFactorScore}</h5>
                      <h5>{athlete.socialModeratingFactorScore}</h5> */
      }
      {
        /* <h5>{athlete.overallPhysiologicalHealth}</h5>
                      <h5>{athlete.overallPsychologicalHealth}</h5>
                      <h5>{athlete.overallSociologicalHealth}</h5>
                      <h5>{athlete.injuryRiskScore}</h5> */
      }
      //             <h5>{athlete.medicalNote}</h5>
      //             <h5>{athlete.coachingDecision}</h5>
      //           </Link>
      //         </div>
      //       );
      //     })}
      // </div>
      {
        /* <div>
            <AddAthlete getData={() => this.getAllAthletes()} />
          </div> */
      }
      //   </div>
      // );
      // }
      // }

      {
        /* <input type="submit" value="Submit" />; */
      }
    }
  }
}

export default AthleteList;
