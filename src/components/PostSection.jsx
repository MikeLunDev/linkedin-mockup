import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { handlePostComment } from "../actions/createNewPost";
import { handleDeleteComment } from "../actions/createNewPost";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import { TiPencil } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  handleSubmit: message => dispatch(handlePostComment(message)),
  handleDelete: id => dispatch(handleDeleteComment(id))
});

class PostSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChange = ({ currentTarget: { value } }) => {
    this.setState({ message: value });
  };

  handleSubmitLocal = async event => {
    event.preventDefault();
    try {
      await this.props.handleSubmit(this.state.message);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ message: "" });
    }
  };

  getNameAndSurname = username => {
    const userToFind = this.props.profiles.find(
      current => current.username === username
    );
    return `${userToFind.name} ${userToFind.surname}`;
  };
  render() {
    return (
      <>
        <Container fluid className="border border-dark ml-4 mb-2 pt-3">
          <Form className="pb-3" onSubmit={this.handleSubmitLocal}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Start a new post..."
                as="textarea"
                rows="3"
                onChange={e => this.handleChange(e)}
                value={this.state.message}
              />
            </Form.Group>
            <Button type="submit">Send comment</Button>
          </Form>
        </Container>
        {this.props.postlist.length &&
          this.props.postlist.map((currentPost, index) => (
            <Container
              key={index}
              fluid
              className="border border-dark ml-4 mb-2 pt-3"
            >
              <Media as="li">
                <Image
                  width={60}
                  height={60}
                  className="mr-3"
                  roundedCircle
                  src={
                    this.props.profiles.find(
                      current => current.username === currentPost.username
                    ).image || "https://via.placeholder.com/130"
                  }
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <div className="d-flex mb-0 pb-0 justify-content-between align-items-baseline ">
                    <h6
                      style={{ lineHeight: 0.5 }}
                      className="mb-0 pb-0 d-block"
                    >
                      {
                        this.props.profiles.find(
                          current => current.username === currentPost.username
                        ).name
                      }
                    </h6>
                    <div>
                      {" "}
                      {currentPost.username === "user4" && (
                        <>
                          <TiPencil
                            size="25px"
                            style={{ cursor: "pointer" }}
                            className="mr-0 mb-0"
                          />
                          <MdDelete
                            onClick={() =>
                              this.props.handleDelete(currentPost._id)
                            }
                            size="25px"
                            style={{ cursor: "pointer" }}
                            className="mr-0 mb-0"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    {
                      this.props.profiles.find(
                        current => current.username === currentPost.username
                      ).title
                    }{" "}
                  </p>
                  <p className="text-muted " style={{ fontSize: "14px" }}>
                    <Moment fromNow>{currentPost.createdAt}</Moment>
                  </p>
                  <p className="pt-0" style={{ fontSize: "14px" }}>
                    {currentPost.text}
                  </p>
                </Media.Body>
              </Media>
            </Container>
          ))}
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSection);
