import React, { Component } from 'react';
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
import {addRepresentative} from "../../actions/AdminActions"


class RepresentativeRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            surname: "",
            birthDate: "",
            idNumber: "",
            city: "",
            country: "",
            postalCode:"",
            address: "",
            phoneNumber: "",
            emailAddress: "",
            password: "",
            confirmationPassword: ""
         }
    }

    saveRepresentative(){
      let representative = JSON.stringify({
        "phoneNumber": this.state.phoneNumber,
        "homePhoneNumber": this.state.phoneNumber,
        "name": this.state.name,
        "surname": this.state.surname,
        "country": this.state.country,
        "city": this.state.city,
        "zip": this.state.zip,
        "idNumber": this.state.idNumber,
        "birthDate": this.state.birthDate,
      })
      this.props.addRepresentative(this.state.emailAddress, this.state.password, representative)
  }


    render() {
        return (
          <div>
            <div className=" text-center mt-1">
              <div className="text-left content mx-auto">
                <div className="typography-line text-center pl-0 mb-0">
                  <h5>Representative Registration</h5>
                </div>
                <p className="description text-center w-75 mx-auto mt-0">
                  You can now register a representative.
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
                                  onChange={(e)=>this.setState({name: e.target.value})}
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
                                  onChange={(e)=>this.setState({surname: e.target.value})}
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
                                  value={this.state.idNumber}
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
                                  value={this.state.city}
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
                                  value={this.state.country}
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
                                  value={this.state.postalCode}
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
                                  value={this.state.address}
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
                                  value={this.state.phoneNumber}
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
                                  value={this.state.emailAddress}
                                  onChange={(e)=>this.setState({emailAddress: e.target.value})}
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
                                  onChange={(e)=>this.setState({password: e.target.value})}
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
                                  onChange={(e)=>this.setState({confirmationPassword: e.target.value})}
                                  placeholder="Confirm Password"
                                  type="password"
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
                          <a href="#" class="blog-slider__button w-50" onClick={()=>this.saveRepresentative()}>
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
      addRepresentative: ( username, password, representative) => {
        addRepresentative (dispatch, username, password, representative);
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RepresentativeRegistration);