import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Container className="pt-5 my-2">
        <Row>
          <Col className="border border-dark" xs={12} md={{ span: 8 }}>
            some text
          </Col>
          <Col
            className="border border-dark"
            xs={6}
            md={{ span: 3, offset: 1 }}
          >
            some other text
          </Col>
        </Row>
      </Container>
    );
  }
}
