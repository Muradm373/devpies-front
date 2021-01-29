import React, { Component } from "react";
import { connect } from "react-redux";

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toString(arr) {
    let result = "";
    for (let item = 0; item < arr.length; item++) result += arr[item] + " ";

    return result;
  }

  render() {
    return (
      <div>
        <p className="description text-center w-50 m-0 mx-auto">
          Please check if everything is correct
        </p>

        <br />
        <p className="description text-center w-75 m-0 mx-auto">Symptoms:</p>
        <div className="tags-cloud mt-4 mx-auto">
          <div className="tagcloud01">
            <ul>
              <li>
                {this.props.symptoms.map((symptom) => {
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

        <p className="description text-center w-75 m-0 mx-auto">Body parts:</p>
        <div className="tags-cloud mt-4 mx-auto">
          <div className="tagcloud01">
            <ul>
              <li>
                {this.props.selectedBodyParts.map((part) => {
                  return (
                    <a href="/#" className="mx-1 description">
                      {part}
                    </a>
                  );
                })} 
              </li>
            </ul>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPage);
