import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import Moment from "react-moment";
import { GoPrimitiveDot } from "react-icons/go";
import { TiPencil } from "react-icons/ti";

export default class MediaListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Media as="li">
        <img
          width={80}
          height={80}
          className="mr-3"
          src="https://via.placeholder.com/130"
          alt="Generic placeholder"
        />
        <Media.Body>
          <div className="d-flex justify-content-between align-items-middle pb-3">
            <h5 className="mb-0 d-block">{this.props.experience.role}</h5>
            <div>
              {" "}
              <TiPencil
                size="35px"
                style={{ cursor: "pointer" }}
                className="mr-0"
              />
            </div>
          </div>
          <p className="mb-0" style={{ fontSize: "15px" }}>
            {this.props.experience.company}{" "}
          </p>
          <p className="text-muted " style={{ fontSize: "15px" }}>
            <Moment format="YYYY MMM">{this.props.experience.startDate}</Moment>
            {" - "}
            {this.props.experience.endDate !== undefined ? (
              <>
                <Moment format="YYYY MMM">
                  {this.props.experience.startDate}
                </Moment>
                <GoPrimitiveDot className="pb-1 px-1" size="11px" />
              </>
            ) : (
              "Present  "
            )}
            <GoPrimitiveDot className="pb-1 px-1" size="11px" />
            <Moment fromNow ago>
              {this.props.experience.startDate}
            </Moment>
            <br />
            {this.props.experience.area}
          </p>
          <p style={{ fontSize: "15px" }}>
            {this.props.experience.description}
          </p>
        </Media.Body>
      </Media>
    );
  }
}
