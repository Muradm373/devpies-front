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
import {getDoctorById} from "../../actions/AdminActions";

class DoctorManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
        details: "",
        name: "",
        surname: "",
        email: "",
        birthDate: "",
        address:"",
        city: "",
        country: "",
        postalCode: "",
        phoneNumber: "",
        idNumber: ""
    };

    this.props.getDoctorById(this.props.selectedUser.id);
  }

  componentWillReceiveProps(props){
    this.setState({
        details: props.fetchedUser.details,
        name: props.fetchedUser.name,
        surname: props.fetchedUser.surname,
        email: props.fetchedUser.user.email,
        birthDate: props.fetchedUser.birthDate,
        address:props.fetchedUser.address,
        city: props.fetchedUser.city,
        country: props.fetchedUser.country,
        postalCode: props.fetchedUser.postalCode,
        phoneNumber: props.fetchedUser.phoneNumber,
        idNumber: props.fetchedUser.idNumber
    })
  }

  render() {
    return (
      <div>
        <div className=" text-center mt-1">
          <div className="text-left content mx-auto">
            <div className="typography-line text-center pl-0 mb-0">
              <h5>Representatives</h5>
            </div>
            <p className="description text-center w-75 mx-auto mt-0">
              Here you will be able to edit Representatives list.
            </p>
            <Row>
              <Col md="5">
                <Card className="card-user settings-table-height">
                  <div className="image">
                    <img
                      alt="..."
                      src={
                        "https://wallpapers.com/images/high/sky-image-7tvuv6iy6wpv9th7.jpg"
                      }
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={
                            "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                          }
                        />
                        <h5 className="title">{`${this.state.name} ${this.state.surname}`}</h5>
                      </a>
                      <p className="description">
                        {this.state.email}
                      </p>
                    </div>
                    <p className="description text-center">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                      <br /> Recusandae voluptate repellendus magni illo ea
                      animi
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
                            onChange={(e)=>this.setState({name: e.target.value})}
                              defaultValue={this.state.name}
                              placeholder="Company"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Last Name</label>
                            <Input
                              defaultValue={this.state.surname}
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
                              defaultValue={`${this.state.birthDate}`}
                              onChange={(e)=>this.setState({birthDate: e.target.value})}
                              placeholder="Birth date"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>ID Number</label>
                            <Input
                              defaultValue={this.state.idNumber}
                              onChange={(e)=>this.setState({idNumber: e.target.value})}
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
                              defaultValue={this.state.city}
                              onChange={(e)=>this.setState({city: e.target.value})}
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-1" md="4">
                          <FormGroup>
                            <label>Country</label>
                            <Input
                              defaultValue={this.state.country}
                              onChange={(e)=>this.setState({country: e.target.value})}
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label>Postal Code</label>
                            <Input
                              defaultValue={this.state.postalCode}
                              onChange={(e)=>this.setState({postalCode: e.target.value})}
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
                              defaultValue={this.state.address}
                              onChange={(e)=>this.setState({address: e.target.value})}
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
                              defaultValue={this.state.phoneNumber}
                              onChange={(e)=>this.setState({phoneNumber: e.target.value})}
                              placeholder="Phone Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Email Address</label>
                            <Input
                              defaultValue={this.state.email}
                              onChange={(e)=>this.setState({email: e.target.value})}
                              placeholder="Email"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <Row className="w-75 mx-auto">
                    <Col md="6">
                      <a href="#" class="blog-slider__button-red w-50 ml-5" onClick={()=> this.props.cancel()}>
                        Cancel
                      </a>
                    </Col>
                    <Col md="6">
                      <a href="#" class="blog-slider__button w-50">
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
    getDoctorById: (id)=>{
        getDoctorById(dispatch, id);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorManagement);
