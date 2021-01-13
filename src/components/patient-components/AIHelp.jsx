import React, { Component } from "react";
import Select from "react-select";
import { deseases } from "../../dictionary/deseases";

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
  }

  onSymptomSelected(symptom) {
    console.log(symptom);
    this.setState({ symptoms: [...this.state.symptoms, symptom.label] });
  }
  render() {
    return (
      <div className="card p-5">
        <div className=" text-center mt-3">
          <div className="typography-line text-center pl-0">
            <h3>AI Assistant</h3>
          </div>
          <p className="mt-2 description text-center w-75 mx-auto">
            AI algorithm, will suggest You a doctor in the hospital, who works
            in the area of a predicted disease.
          </p>
        </div>

        <div className="card-body w-100 mx-auto" style={{ zIndex: 9000 }}>
          <p className="mt-2 description text-left">Select your symptoms:</p>
          <Select
            options={this.state.options}
            onChange={this.onSymptomSelected}
          />
          <div className="tags-cloud mt-4 w-50 mx-auto">
            <div className="tagcloud01">
              <ul>
                <li>
                  {this.state.symptoms.map((symptom) => {
                    return (
                      <a href="/#" className="mx-1 description">
                        {symptom}
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
          <button class="continue-application float-right mt-5" style={{}}>
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
          </button>
        </div>
      </div>
    );
  }
}

export default AIHelp;
