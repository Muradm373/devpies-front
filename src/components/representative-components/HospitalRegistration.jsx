import React, { Component } from 'react';
import { connect } from "react-redux";
import {addHospital} from "../../actions/RepresentativeActions"
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


class HospitalRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            closeTime:"",
            name: "",
            openTime: "",
            address:"",
            city: "",
            country: "",
            postalCode: "",
            phoneNumber: "",
            website: "",
            lat: "0",
            lng: "0"
         }
    }

    saveHospital(){
      let Hospital = JSON.stringify({
        "closeTime": this.state.closeTime,
        "openTime": this.state.openTime,
        "name": this.state.name,
        "address": this.state.address,
        "phoneNumber": this.state.phoneNumber,
        "rating": "0",
        "country": this.state.country,
        "city": this.state.city,
        "lat": this.state.lat,
        "zip": this.state.postalCode,
        "lng": this.state.lng,
        "website": this.state.website
      })
      this.props.addHospital(Hospital)
  }


    render() {
        return (
          <div>
            <div className=" text-center mt-1">
              <div className="text-left content mx-auto">
                <div className="typography-line text-center pl-0 mb-0">
                  <h5>Hospital Registration</h5>
                </div>
                <p className="description text-center w-75 mx-auto mt-0">
                  You can now register a Hospital.
                </p>
                <Row>
                
                  <Col md="12">
                    <Card className="card-user-details p-5">
                    <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label>Name</label>
                            <Input
                            onChange={(e)=>this.setState({name: e.target.value})}
                              defaultValue={this.state.name}
                              placeholder="Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Opening Time</label>
                            <Input
                              defaultValue={`${this.state.openTime}`}
                              onChange={(e)=>this.setState({openTime: e.target.value})}
                              placeholder="Opening Time"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                          <FormGroup>
                            <label>Closing Time</label>
                            <Input
                              defaultValue={this.state.closeTime}
                              onChange={(e)=>this.setState({closeTime: e.target.value})}
                              placeholder="Closing Time"
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
                              placeholder="Address"
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
                            <label>Website</label>
                            <Input
                              defaultValue={this.state.website}
                              onChange={(e)=>this.setState({website: e.target.value})}
                              placeholder="Website"
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
                          <a href="#" class="blog-slider__button w-50" onClick={()=>this.saveHospital()}>
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
      addHospital: (Hospital) => {
        addHospital (dispatch,Hospital);
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HospitalRegistration);