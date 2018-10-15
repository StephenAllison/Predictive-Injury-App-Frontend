// import React, { Component } from "react";
// import axios from "axios";

// class EditUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgPath: this.props.theUser.imgPath,
//       sport: this.props.theUser.sport,
//       league: this.props.theUser.title,
//       team: this.props.theUser.team,
//       staffingDivision: this.props.theUser.staffingDivision,
//       role: this.props.theUser.role,
//       name: this.props.theUser.name
//     };
//   }
//   handleChange = e => {
//     switch (e.target.name) {
//       case "imgPath":
//         this.setState({ imgPath: e.target.files[0] });
//         break;
//       default:
//         this.setState({ [e.target.name]: e.target.value });
//     }
//   };

//   handleFormSubmit = event => {
//     const imgPath = this.state.imgPath;
//     // const sport = this.state.sport;
//     // const league = this.state.league;
//     // const team = this.state.team;
//     const staffingDivision = this.state.staffingDivision;
//     const role = this.state.role;
//     const name = this.state.name;

//     event.preventDefault();

//     axios
//       //DEPLOY LOCALLY
//       .patch(`/api/users/${this.props.theUser._id}`)
//       //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//       //DEPLOY TO HEROKU
//       // .put(`${process.env.REACT_APP_API_URL}/users${this.props.theUser._id}`)

//       .then(() => {
//         this.props.getTheUser();
//         // after submitting the form, redirect to '/users'
//         this.props.history.push("/users");
//       })
//       .catch(error => console.log(error));
//   };

//   handleChangeImgPath = event => {
//     this.setState({
//       imgPath: event.target.value
//     });
//   };

//   //   handleChangeSport = event => {
//   //     this.setState({
//   //       description: event.target.value
//   //     });
//   //   };

//   //   handleChangeLeague = event => {
//   //     this.setState({
//   //       league: event.target.value
//   //     });
//   //   };

//   handleChangeSport = event => {
//     this.setState({
//       sport: event.target.value
//     });
//   };

//   handleChangeLeague = event => {
//     this.setState({
//       league: event.target.value
//     });
//   };
//   handleChangeTeam = event => {
//     this.setState({
//       team: event.target.value
//     });
//   };
//   handleChangeRole = event => {
//     this.setState({
//       role: event.target.value
//     });
//   };

//   handleChangeName = event => {
//     this.setState({
//       name: event.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <hr />
//         <h3>Edit form</h3>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Image:</label>
//           <input
//             type="file"
//             name="imgPath"
//             value={this.state.imgPath}
//             onChange={e => this.handleChangeImgPath(e)}
//           />
//           <label>Sport:</label>
//           <textarea
//             name="sport"
//             value={this.state.sport}
//             onChange={e => this.handleChangeSport(e)}
//           />

//           <label>League:</label>
//           <input
//             type="text"
//             name="league"
//             value={this.state.league}
//             onChange={e => this.handleChangeLeague(e)}
//           />
//           <label>Team:</label>
//           <textarea
//             name="team"
//             value={this.state.team}
//             onChange={e => this.handleChangeTeam(e)}
//           />
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={e => this.handleChangeName(e)}
//           />
//           <label>Role</label>
//           <textarea
//             name="role"
//             value={this.state.injuryStatus}
//             onChange={e => this.handleChangeRole(e)}
//           />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default EditUser;
