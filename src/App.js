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
    if (this.props.loggedUser === "" && token === null) {
      this.setState({ redirectToLogin: true });
    } else {
      if (this.props.loggedUser !== "") {
        await this.props.refreshToken(this.props.loggedUser);
        if (!this.props.error.fetchError) {
          await this.props.getAllPost(this.props.loggedUser);
        }
      } else {
        /* SE METTO QUESTO CRASHA E MI DICE 
        "Unhandled Rejection (Error): Actions must be plain objects. Use custom middleware for async actions."
        await this.props.refreshToken(token);
        */
      }
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
