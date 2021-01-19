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
import { connect } from "react-redux";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
  pieData,
  pieOptions,
  pieStyles,
} from "../../utilities/chart";
import FeebackHeader from "./FeedbackHeader";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let chartInstance = null;
    return (
      <div>
        <div className="p-5">
          <div className=" text-center">
            <div className="typography-line text-center pl-0 mb-0">
              <h5>Statistics</h5>
            </div>
            <p className="description text-center w-75 mx-auto mt-0">
              Here you will see your activity statistics.
            </p>
          </div>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardBody>
                  <div className="my-4">
                    <Row>
                      <Col xs={12} md={4}>
                        <div className="ml-4 color-gray">
                          <i className="fas fa-user fa-3x text-gray-300"></i>
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <div className="ml-0">
                          <h4 className="m-0">182</h4>
                          <p className="color-gray">Number of patients</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardBody>
                  <div className="my-4">
                    <Row>
                      <Col xs={12} md={4}>
                        <div className="ml-4 color-gray">
                          <i className="fas fa-chart-line fa-3x text-gray-300"></i>
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <div className="ml-0">
                          <h4 className="m-0">53</h4>
                          <p className="color-gray">Search occurences</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardBody>
                  <div className="my-4">
                    <Row>
                      <Col xs={12} md={4}>
                        <div className="ml-4 color-gray">
                          <i className="fas fa-wallet fa-3x text-gray-300"></i>
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <div className="ml-0">
                          <h4 className="m-0">$20.000</h4>
                          <p className="color-gray">Earnings</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Customers</h5>
                  <CardTitle tag="h5">Patient Satisfaction</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="fas fa-ellipsis-v color-gray" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Refresh</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="my-4">
                    <h2 className="">80.35%</h2>
                    <div class="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "83%" }}
                        ariaValuenow="25"
                        ariaValuemin="0"
                        ariaValuemax="100"
                      ></div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fas fa-history" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={7}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Customers</h5>
                  <CardTitle tag="h5">Age distribution</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="fas fa-ellipsis-v color-gray" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Refresh</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <div style={pieStyles.pieContainer}>
                      <Doughnut
                        data={pieData}
                        options={pieOptions}
                        ref={(input) => {
                          chartInstance = input;
                        }}
                      />
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fas fa-history" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Global Sales</h5>
                  <CardTitle tag="h5">Shipped Products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="fas fa-ellipsis-v color-gray" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Refresh</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fas fa-history" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">2020 Sales</h5>
                  <CardTitle tag="h5">All products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="fas fa-ellipsis-v color-gray" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Refresh</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fas fa-history" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Patients per day</h5>
                  <CardTitle tag="h5">1 year Performance</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fas fa-history" /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <div className=" text-center">
            <div className="typography-line text-center pl-0 mb-0">
              <h5>Feedbacks</h5>
            </div>
            <p className="description text-center w-75 mx-auto mt-0">
              Here you will see your feedbacks
            </p>
          </div>

          <Row>
            <Col xs={12} md={12}>
              {this.props.feedbacks.map((feedback) => {
                return (
                  <FeebackHeader
                    rating={feedback.rating}
                    description={feedback.description}
                    user={feedback.user}
                    date={feedback.date}
                  ></FeebackHeader>
                );
              })}
            </Col>
          </Row>
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
    signOut: () => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
