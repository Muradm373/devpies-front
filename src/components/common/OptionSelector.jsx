import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Fab from "@material-ui/core/Fab";

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
      <div
        className="card p-5 mx-auto"
        style={{ width: "75%", borderRadius: "20px" }}
      >
        <div className=" text-center ">
          <div className="typography-line text-center p-0 m-0">
            <h3>Questionnaire</h3>
          </div>
          <p className="description text-center w-75 m-0 mx-auto">
            Please describe the pain by answering the following questions
          </p>

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

            <FormControl component="fieldset">
              <FormLabel component="legend">Question 1</FormLabel>
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
              <FormLabel component="legend">Question 2</FormLabel>
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
              <FormLabel component="legend">Question 3</FormLabel>
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
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            alignItems: "end",
            float: "right"
          }}
          onClick={() => {
            this.props.closeModal();
            console.log("cllicked");
          }}
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
}

export default OptionSelector;
