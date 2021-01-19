import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class FeebackHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <Card className="card-chart">
            <CardHeader>
              <UncontrolledDropdown>
                <p className="color-gray">
                  <small>{this.props.date}</small>
                </p>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              <div className="">
                <Row>
                  <Col xs={12} md={2}>
                    <div className="ml-4 color-gray">
                      <img
                        src={"https://www.w3schools.com/howto/img_avatar.png"}
                        className="rounded-borders"
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div className="ml-0">
                      <h5 className="m-0 text-left">{`${this.props.user.name} ${this.props.user.surname}`}</h5>
                      <p className="color-gray text-left">
                        {this.props.description}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FeebackHeader;
