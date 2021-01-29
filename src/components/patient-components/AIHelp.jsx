import React, { Component } from "react";
import Select from "react-select";
import { deseases } from "../../dictionary/deseases";
import BodyScene from "../common/BodyScene";
import { CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";

class AIHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      options: deseases.map((e) => {
        return { value: e.value, label: e.value };
      }),
    };

    this.onSymptomSelected = this.onSymptomSelected.bind(this);
    this.removeElementFromSymptoms = this.removeElementFromSymptoms.bind(this);
  }

  removeElementFromSymptoms(symptom) {
    this.setState({
      symptoms: [...this.state.symptoms.filter((e) => e !== symptom)],
    });
  }

  onSymptomSelected(symptom) {
    if (!this.state.symptoms.includes(symptom.label))
      this.setState({ symptoms: [...this.state.symptoms, symptom.label] });
  }
  render() {
    return (
      <div>
        <div className="card p-5 height-flex">
          <div className=" text-center">
            <div className="typography-line text-center pl-0 mb-0">
              <h5>AI Assistant</h5>
            </div>
            <p className="description text-center w-75 mx-auto mt-0">
              AI algorithm, will suggest You a doctor in the hospital, who works
              in the area of a predicted disease.
            </p>
            <hr className="mb-5" />
          </div>
          <Row >
            <Col md="5">
              <div className="">
                <div
                  className="card-body w-100 mx-auto"
                  style={{ zIndex: 9000 }}
                >
                  <p className="mt-2 description text-left">
                    1. Select your symptoms:
                  </p>
                  <Select
                    options={this.state.options}
                    onChange={this.onSymptomSelected}
                  />
                  <div className="tags-cloud mt-4 mx-auto">
                    <div className="tagcloud01">
                      <ul>
                        <li>
                          {this.state.symptoms.map((symptom) => {
                            return (
                              <a
                                href="/#"
                                className="mx-1 description"
                                onClick={() =>
                                  this.removeElementFromSymptoms(symptom)
                                }
                              >
                                {symptom}
                              </a>
                            );
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <button
                  class="continue-application float-right mt-5"
                  style={{}}
                >
                  <div>
                    <div class="pencil"></div>
                    <div class="folder">
                      <div class="top">
                        <svg viewBox="0 0 24 27">
                          <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                        </svg>
                      </div>
                      <div class="paper"></div>
                    </div>
                  </div>
                  Get Assistance
                </button> */}
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="">
                <p className="mt-2 description text-left">
                  2. Give us detailed description:
                </p>
                <BodyScene />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AIHelp;
