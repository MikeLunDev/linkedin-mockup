import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Profile />
      </>
    );
  }
}

export default App;
