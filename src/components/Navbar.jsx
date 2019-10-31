import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FaLinkedin } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  IoMdHome,
  IoMdPeople,
  IoIosBriefcase,
  IoMdText,
  IoMdNotifications,
  IoMdApps,
  IoIosTv
} from "react-icons/io";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          style={{ padding: 0 }}
          bg="dark"
          sticky="top"
          variant="dark"
          expand="lg"
        >
          <Container style={{ paddingLeft: "140px" }}>
            <Navbar.Brand href="#home">
              <FaLinkedin size="43px" />
            </Navbar.Brand>
            <Form className="mr-auto" inline>
              <FormControl
                type="text"
                placeholder="  Search"
                style={{ minWidth: "18vw", padding: "5px" }}
                className=" ml-0 pl-0"
              />
            </Form>
          </Container>
          <Nav className="ml-auto">
            <Nav.Link to="/" active>
              <IoMdHome className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Home</span>
            </Nav.Link>
            <Nav.Link to="/">
              <IoMdPeople className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Network</span>
            </Nav.Link>
            <Nav.Link to="/">
              <IoIosBriefcase size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Jobs</span>
            </Nav.Link>
            <Nav.Link to="/">
              <IoMdText className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Messaging</span>
            </Nav.Link>
            <Nav.Link to="/">
              <IoMdNotifications className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Notifications</span>
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/">
              <IoMdApps className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Work</span>
            </Nav.Link>
            <Nav.Link to="/">
              <IoIosTv className="pl-1" size="35px" />
              <br />
              <span style={{ fontSize: "13px" }}>Learning</span>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
