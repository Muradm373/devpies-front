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
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { getListOfHospitalsByPage, resetListOfHospitals, addDoctor } from "../../actions/RepresentativeActions";

class DoctorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      birthDate: "",
      idNumber: "",
      city: "",
      country: "",
      postalCode: "",
      address: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      confirmationPassword: "",
      hospitalId: "",

      isLazyLoading: false,
      page: 0,
      selectedHospital: undefined,
    };

    this.lazyLoad = this.lazyLoad.bind(this);
  }

  componentDidMount() {
    this.props.resetListOfHospitals();
    this.lazyLoad();
  }

  parseTime(time) {
    let timeArr = JSON.stringify(time).split("T");
    let unformatted = timeArr[1];
    let unformattedSplit = unformatted.split(":");

    return `${unformattedSplit[0]}:${unformattedSplit[1]}`;
  }

  lazyLoad() {
    if (this.props.adminHasMoreHospitals) {
      this.setState({ isLazyLoading: true });
      setTimeout(() => {
        this.props.getListOfHospitalsByPage(this.state.page);
        this.setState({
          isLazyLoading: false,
          page: this.state.page + 1,
        });
      }, 1000);
    }
  }

  saveDoctor() {
    let doctor = JSON.stringify({
      phoneNumber: this.state.phoneNumber,
      homePhoneNumber: this.state.phoneNumber,
      name: this.state.name,
      surname: this.state.surname,
      country: this.state.country,
      city: this.state.city,
      zip: this.state.zip,
      idNumber: this.state.idNumber,
      birthDate: this.state.birthDate,
    });
    this.props.addDoctor(
      this.state.selectedHospital.id,
      this.state.emailAddress,
      this.state.password,
      doctor
    );
  }

  render() {
    return (
      <div>
        <div className=" text-center mt-1">
          <div className="text-left content mx-auto">
            <div className="typography-line text-center pl-0 mb-0">
              <h5>Doctor Registration</h5>
            </div>
            <p className="description text-center w-75 mx-auto mt-0">
              You can now register a Doctor.
            </p>
            <Row>
              <Col md="12">
                <Card className="card-user-details p-5">
                  <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>First Name</label>
                            <Input
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                              placeholder="First Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Last Name</label>
                            <Input
                              value={this.state.surname}
                              onChange={(e) =>
                                this.setState({ surname: e.target.value })
                              }
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
                              value={this.state.birthDate}
                              onChange={(e) =>
                                this.setState({ birthDate: e.target.value })
                              }
                              placeholder="Birth date"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>ID Number</label>
                            <Input
                              value={this.state.idNumber}
                              onChange={(e) =>
                                this.setState({ idNumber: e.target.value })
                              }
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
                              value={this.state.city}
                              onChange={(e) =>
                                this.setState({ city: e.target.value })
                              }
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-1" md="4">
                          <FormGroup>
                            <label>Country</label>
                            <Input
                              value={this.state.country}
                              onChange={(e) =>
                                this.setState({ country: e.target.value })
                              }
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label>Postal Code</label>
                            <Input
                              value={this.state.postalCode}
                              onChange={(e) =>
                                this.setState({ postalCode: e.target.value })
                              }
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
                              value={this.state.address}
                              onChange={(e) =>
                                this.setState({ address: e.target.value })
                              }
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
                              value={this.state.phoneNumber}
                              onChange={(e) =>
                                this.setState({ phoneNumber: e.target.value })
                              }
                              placeholder="Phone Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Email Address</label>
                            <Input
                              value={this.state.emailAddress}
                              onChange={(e) =>
                                this.setState({ emailAddress: e.target.value })
                              }
                              placeholder="Email"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Password</label>
                            <Input
                              value={this.state.password}
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                              placeholder="Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Confirm Password</label>
                            <Input
                              value={this.state.confirmationPassword}
                              onChange={(e) =>
                                this.setState({
                                  confirmationPassword: e.target.value,
                                })
                              }
                              placeholder="Confirm Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <Row>
                    <Col md="12" style={{minHeight: "200px"}}>
                    <label>Assign to Hospital</label>
                      <BottomScrollListener onBottom={this.lazyLoad}>
                        {(scrollRef) => {
                          return (
                            <div
                              className="mt-2 scrollbar"
                              id="style-7"
                              ref={scrollRef}
                              style={{
                                height: "90%",
                                overflowY: "scroll",
                                overflowX: "hidden",
                              }}
                            >
                              <div>
                                {this.props.listOfAdminHospitals.map((x) => (
                                  <a
                                    class="dropdown-item d-flex align-items-center px-auto"
                                    href="#"
                                    style={{ height: "100px" }}
                                    style={{ height: "100px" }}
                                    onClick={() =>
                                      this.setState({ selectedHospital: x })
                                    }
                                  >
                                    <div class="mr-3">
                                      <img
                                        alt="..."
                                        class="avatar-sm border-gray"
                                        src="data:image/jpeg;base64,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"
                                      />
                                    </div>
                                    <div>
                                      <div class="font-weight-bold">
                                        {`${x.name}`}
                                      </div>
                                      <span class="font-gray-400 small">
                                        {`${this.parseTime(
                                          x.openTime
                                        )}-${this.parseTime(x.closeTime)}`}
                                      </span>
                                      <br></br>
                                      <span class="font-gray-500 small">
                                        {`${x.address} | ${x.phoneNumber}`}
                                      </span>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              {this.state.isLazyLoading && (
                                <div class="px-auto w-100">
                                  <div class="snippet" data-title=".dot-pulse">
                                    <div class="stage">
                                      <div class="dot-pulse"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        }}
                      </BottomScrollListener>
                      </Col>
                    </Row>
                  </CardBody>
                  <Row className="w-75 mx-auto">
                    <Col md="6">
                      <a
                        href="#"
                        class="blog-slider__button-red w-50 ml-5"
                        onClick={() => this.props.cancel()}
                      >
                        Cancel
                      </a>
                    </Col>
                    <Col md="6">
                      <a
                        href="#"
                        class="blog-slider__button w-50"
                        onClick={() => this.saveDoctor()}
                      >
                        Save
                      </a>
                    </Col>
                  </Row>
                </Card>
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
  return {
    getListOfHospitalsByPage: (page) => {
      getListOfHospitalsByPage(dispatch, page);
    },
    resetListOfHospitals: () => {
      resetListOfHospitals(dispatch);
    },
    addDoctor: (hospitalId, username, password, doctor) => {
      addDoctor(dispatch,hospitalId, username, password, doctor);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorRegistration);
