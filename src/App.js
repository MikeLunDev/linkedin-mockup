import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import { handleGetProfile } from "../src/actions/getProfile";
import { handleGetExperiences } from "../src/actions/getExperiences";
import { connect } from "react-redux";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getProfileInfo: () => dispatch(handleGetProfile()),
  getExperienceInfo: () => dispatch(handleGetExperiences())
});
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.getProfileInfo();
    await this.props.getExperienceInfo();
  };

  render() {
    return (
      <>
        <NavBar />
        <Profile />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
