import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import FileExplorer from "./FileExplorer";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <div className=" text-center mt-1">

          <div className="text-left content mx-auto">
          <div className="typography-line text-center pl-0 mb-0">
            <h5>User Profile</h5>
          </div>
          <p className="description text-center w-75 mx-auto mt-0">
            Here you will be able to edit your profile.
          </p>
            <Row>
            <Col md="5">
                  <Card className="card-user settings-table-height">
                    <div className="image">
                      <img alt="..." src={"https://wallpapers.com/images/high/sky-image-7tvuv6iy6wpv9th7.jpg"} />
                    </div>
                    <CardBody>
                      <div className="author">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar border-gray"
                            src={"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"}
                          />
                          <h5 className="title">{`${this.props.userDetails.name} ${this.props.userDetails.surname}`}</h5>
                        </a>
                        <p className="description">{this.props.userDetails.email}</p>
                      </div>
                      <p className="description text-center">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Recusandae voluptate repellendus magni illo ea animi
                      </p>
                    </CardBody>
                    <hr />
                    <div className="button-container">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-facebook-f" />
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </Card>
                </Col>
              <Col md="7">
                <Card className="card-user-details p-5 settings-table-height">
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
                </Card>
              </Col>

              
            </Row>
            <Card className="card-user w-50 mx-auto">
            <div className="typography-line text-center pl-0 mt-3">
              <h5>My Files</h5>
            </div>
            <FileExplorer files={this.props.files} hospitalName="Leyla Medical Clinic" />
            <FileExplorer files={this.props.files} hospitalName="Istanbul Clinic"/>
            </Card>
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
