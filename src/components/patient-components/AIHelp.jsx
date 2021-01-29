import React, { Component } from "react";
import Select from "react-select";
import { deseases } from "../../dictionary/deseases";
import BodyScene from "../common/BodyScene";
import { CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
import OptionSelector from "../common/OptionSelector";
import { connect } from "react-redux";

class AIHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      options: deseases.map((e) => {
        return { value: e.value, label: e.value };
      }),

      description: "",
      questionary: false,
    };

    this.onSymptomSelected = this.onSymptomSelected.bind(this);
    this.removeElementFromSymptoms = this.removeElementFromSymptoms.bind(this);
    this.toggleQuestionary = this.toggleQuestionary.bind(this);
  }

  toggleQuestionary(state) {
    this.setState({ questionary: state });
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

          {this.state.questionary ? (
            <OptionSelector
              selectedBodyParts={this.props.selectedBodyParts}
              toggleQuestionary={this.toggleQuestionary}
              description={this.state.description}
              symptoms={this.state.symptoms}
            ></OptionSelector>
          ) : (
            <Row>
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

                    <p className="mt-2 description text-left">
                      2. Give us detailed description:
                    </p>
                    <div class="form-group">
                      <Input
                        placeholder="Description"
                        type="text"
                        type="textarea"
                        value={this.state.description}
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="">
                  <p className="mt-2 description text-left">
                    3. Show in which body part the pain is:
                  </p>
                  <BodyScene toggleQuestionary={this.toggleQuestionary} />
                </div>
              </Col>
            </Row>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(AIHelp);
