import React, { Component } from "react";
import { connect } from "react-redux";
import { CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card p-3">
        <div className=" text-center mt-1">
          <div className="typography-line text-center pl-0 mt-3">
            <h5>My Data</h5>
          </div>

          <div className="text-left content">
            <Row>
              <Col md="12">
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={this.props.userDetails.name}
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={this.props.userDetails.surname}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Birth date</label>
                          <Input
                            defaultValue={`${this.props.userDetails.birthDay}/${this.props.userDetails.birthMonth}/${this.props.userDetails.birthYear}`}
                            placeholder="Birth date"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>ID Number</label>
                          <Input
                            defaultValue={this.props.userDetails.idNumber}
                            placeholder="ID Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={this.props.userDetails.city}
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={this.props.userDetails.country}
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input
                            defaultValue={this.props.userDetails.postalCode}
                            placeholder="ZIP Code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue={this.props.userDetails.address}
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            defaultValue={this.props.userDetails.phoneNumber}
                            placeholder="Phone Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Email Address</label>
                          <Input
                            defaultValue={this.props.userDetails.email}
                            placeholder="Email"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
