import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { FaLinkedin } from "react-icons/fa";

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
          <Navbar.Brand href="#home">
            <FaLinkedin size="43px" style={{ marginLeft: "14.2vw" }} />
          </Navbar.Brand>
          <Form className="mr-auto" inline>
            <FormControl
              type="text"
              placeholder="  Search"
              style={{ minWidth: "17vw", padding: "5px" }}
              className="mr-sm-2 ml-0 pl-0"
            />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
          </Nav>
        </Navbar>
      </>
    );
  }
}
