import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { TiPencil } from "react-icons/ti";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Experience from "./Experience";
import BioInformations from "./BioInformations";
import { GoPrimitiveDot } from "react-icons/go";
import { connect } from "react-redux";

const mapStateToProps = state => state;
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Container className="pt-5 my-2 mb-3">
          <Row>
            <Col
              className="border border-dark px-0 shadow-sm"
              xs={12}
              md={{ span: 8 }}
            >
              <Container className="px-0" fluid>
                <Row>
                  <Col xs={12}>
                    <Image
                      src="https://via.placeholder.com/200/000000/FFFFFF?Text=404%20C/O%20https://placeholder.com/"
                      style={{ maxHeight: "180px" }}
                      className="w-100"
                    />
                  </Col>
                </Row>
              </Container>
              <Container className="pl-0" style={{ backgroundColor: "#fff" }}>
                <div className="d-flex justify-content-between">
                  <div className="py-2 px-4">
                    <Image
                      src={"https://via.placeholder.com/200"}
                      roundedCircle
                      alt=""
                      style={{
                        marginTop: "-100px",
                        position: "relative",
                        width: "150px",
                        height: "155px"
                      }}
                    />
                  </div>
                  {/* RIGHT BUTTONS */}
                  <div className="py-2">
                    <ButtonToolbar className="pt-2">
                      <DropdownButton
                        id="dropdown-item-button"
                        title="Add More Section"
                      >
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                      <Button variant="outline-primary " className="mx-2 mr-3">
                        Others...
                      </Button>
                      <TiPencil
                        size="35px"
                        style={{ cursor: "pointer" }}
                        className="mr-0"
                      />
                    </ButtonToolbar>
                  </div>
                </div>

                {/* BIO INFO */}
                <Container fluid className="px-0">
                  {this.props.profile.name !== undefined &&
                    this.props.error.message === "" && (
                      <div className="d-flex justify-content-start">
                        <ListGroup
                          variant="flush"
                          className="list-unstyled py-0 my-0"
                        >
                          <ListGroup.Item>
                            <h5>{`${this.props.profile.name} ${this.props.profile.surname}`}</h5>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {this.props.profile.title}
                          </ListGroup.Item>

                          <Nav>
                            <Nav.Item className="px-0">
                              <Nav.Link disabled>
                                {this.props.profile.area}
                              </Nav.Link>
                            </Nav.Item>
                            <GoPrimitiveDot
                              className="pt-3 text-muted"
                              size="25px"
                            />
                            <Nav.Item className="px-0">
                              <Nav.Link>
                                <strong>500 + Links</strong>
                              </Nav.Link>
                            </Nav.Item>
                            <GoPrimitiveDot
                              className="pt-3 text-muted"
                              size="25px"
                            />
                            <Nav.Item className="px-0">
                              <Nav.Link>
                                <strong>Other Info</strong>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </ListGroup>
                      </div>
                    )}
                  {this.props.error.fetchError && (
                    <p>{this.props.error.message}</p>
                  )}
                </Container>
              </Container>
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
        <BioInformations />
        <Experience />
      </>
    );
  }
}
export default connect(mapStateToProps)(Profile);
