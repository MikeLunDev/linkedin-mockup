import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import {
  handleGetProfile,
  handleRefreshToken
} from "../src/actions/profileActions";
import { handleGetAllPost } from "../src/actions/postActions";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Feeds from "./components/Feeds";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getProfileInfo: token => dispatch(handleGetProfile(token)),
  getAllPost: token => dispatch(handleGetAllPost(token)),
  refreshToken: token => dispatch(handleRefreshToken(token))
});
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToLogin: false
    };
  }

  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    console.log(token === null);
    if (token === null) {
      this.setState({ redirectToLogin: true });
    } else {
      /*  await this.props.refreshToken(token);
      localStorage.setItem("token", this.props.loggedUser); */

      await this.props.getAllPost(token);
    }
  };

  render() {
    return (
      <Router>
        <Route path="/">
          <NavBar />
        </Route>
        <Switch>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/feeds/" />
          </Route>
          <Route path="/profile/:user">
            <Profile />
          </Route>
          <Route path="/feeds/">
            <Feeds />
          </Route>
        </Switch>
        {!this.state.redirectToLogin && <Redirect to="/login" />}
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
