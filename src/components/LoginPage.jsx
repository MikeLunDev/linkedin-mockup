import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { LocalForm, Control } from "react-redux-form";
import { connect } from "react-redux";
import { handleGetLoggedUser } from "../../src/actions/profileActions";
import { withRouter, Redirect, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(handleGetLoggedUser(credentials))
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: false
    };
  }

  componentWillUnmount = () => {
    if (this.state.rememberMe)
      localStorage.setItem("token", this.props.loggedUser);
  };

  handleSubmit = async values => {
    var toSend = { ...values, rememberMe: this.state.rememberMe };
    await this.props.signIn(toSend);
  };

  handleChange = e => {
    this.setState({ rememberMe: !this.state.rememberMe });
  };

  render() {
    return (
      <div className="container-fluid d-flex align-items-center h-75 ">
        {this.props.loggedUser === "" ? (
          <div
            className="container customShadow border py-2 pt-3"
            style={{ maxWidth: "33%", margin: "0 auto" }}
          >
            <LocalForm
              style={{ width: "80%" }}
              onSubmit={values => this.handleSubmit(values)}
            >
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Control.text
                  id="email"
                  model=".email"
                  className="form-control mb-1"
                  placeholder="Your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Control.password
                  id="password"
                  model=".password"
                  className="form-control mb-1"
                  placeholder="Your Password"
                  required
                />
              </Form.Group>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Remember me"
                className="pb-2"
                value={this.state.rememberMe}
                onChange={this.handleChange}
              />

              {this.props.error.fetchError &&
                this.props.error.statusCode === 401 && (
                  <p color="warning" style={{ fontSize: "14px" }}>
                    Login failed. If you don't have an account register{" "}
                    <Link to="/register">HERE</Link> <br />
                    If you forgot your password click <Link to="/">HERE.</Link>
                  </p>
                )}
              <div className="d-flex justify-content-start align-items-center">
                <Control.button
                  className="btn btn-secondary mr-2 my-1 mb-2 d-inline"
                  model="local"
                  disabled={{ valid: false }}
                >
                  Submit
                </Control.button>
                {this.state.isLoading && (
                  <Spinner
                    animation="border"
                    size="md"
                    className="pt-2"
                    role="status"
                    variant="success"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}
              </div>
            </LocalForm>
          </div>
        ) : (
          <Redirect to="/feeds" />
        )}
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
