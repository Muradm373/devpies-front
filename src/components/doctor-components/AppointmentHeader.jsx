import React, { Component } from "react";

class AppointmentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start w-75 mx-auto">
        <div class="d-flex w-100 justify-content-between">
          <div className="ml-3 mb-1">
            <h5>{this.props.appointment.hospitalName}</h5>
            <p>Symptoms:</p>
          </div>
          <div>
            <small>{this.props.appointment.dateOfIssue}</small>
            <br />
            <small className="badge badge-warning">
              {this.props.appointment.status}
            </small>
          </div>
        </div>
        <div className="tags-cloud w-50 mx-auto">
          <div className="tagcloud01">
            <ul>
              <li>
                {this.props.appointment.symptoms.map((symptom) => {
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
      </div>
    );
  }
}

export default AppointmentHeader;
