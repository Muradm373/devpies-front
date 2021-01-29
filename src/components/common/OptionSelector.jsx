import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Fab from "@material-ui/core/Fab";
import SubmitPage from "./SubmitPage";

class OptionSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBodyPart: { name: undefined, prop: 0 },
      value: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div className=" text-center ">
          <div className="typography-line text-center p-0 m-0"></div>

          <div className="card-body w-100 mx-auto">
            <nav className="px-auto">
              <ol className="cd-breadcrumb triangle mx-auto">
                {this.props.selectedBodyParts.map((e, prop) => {
                  return (
                    <li
                      className={
                        "" + this.state.activeBodyPart.prop == prop
                          ? "current"
                          : ""
                      }
                      onClick={() =>
                        this.setState({
                          activeBodyPart: { name: e, prop: prop },
                        })
                      }
                    >
                      <p>{e}</p>
                    </li>
                  );
                })}

                <li
                  className={
                    "" + this.state.activeBodyPart.name === "submit"
                      ? "current"
                      : ""
                  }
                  onClick={() =>
                    this.setState({
                      activeBodyPart: { name: "submit", prop: undefined },
                    })
                  }
                >
                  <p>Submit</p>
                </li>
              </ol>
            </nav>

            {this.state.activeBodyPart.prop === undefined ? (
              <div>
                <SubmitPage symptoms={this.props.symptoms}/>
                                   <button
                  class="continue-application mt-5"
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
                </button> 
                </div>
            ) : (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="question1"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="value 1"
                    control={<Radio />}
                    label="Value 1"
                  />
                  <FormControlLabel
                    value="value 2"
                    control={<Radio />}
                    label="Value 2"
                  />
                  <FormControlLabel
                    value="value 3"
                    control={<Radio />}
                    label="Value 3"
                  />
                </RadioGroup>
                <br />
                <FormLabel component="legend">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="question2"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="value 1"
                    control={<Radio />}
                    label="Value 1"
                  />
                  <FormControlLabel
                    value="value 2"
                    control={<Radio />}
                    label="Value 2"
                  />
                  <FormControlLabel
                    value="value 3"
                    control={<Radio />}
                    label="Value 3"
                  />
                </RadioGroup>
                <FormLabel component="legend">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="question2"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="value 1"
                    control={<Radio />}
                    label="Value 1"
                  />
                  <FormControlLabel
                    value="value 2"
                    control={<Radio />}
                    label="Value 2"
                  />
                  <FormControlLabel
                    value="value 3"
                    control={<Radio />}
                    label="Value 3"
                  />
                </RadioGroup>
              </FormControl>
            )}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            alignItems: "end",
            float: "right",
          }}
          onClick={() => {
            this.props.closeModal();
            console.log("cllicked");
          }}
        ></div>
      </div>
    );
  }
}

export default OptionSelector;
