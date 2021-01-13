import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentHeader from "./AppointmentHeader";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card p-5">
        <div className=" text-center">
          <div className="typography-line text-center pl-0 mb-0">
            <h5>Appointments</h5>
          </div>
          <p className="description text-center w-75 mx-auto mt-0">
            Here you will see your active appointments and appointments history.
          </p>
          <hr className="mb-5" />
          <p className="mt-2 description text-left  mx-auto sub-header">
            Active Appointments
          </p>
          {this.props.activeAppointments.length === 0 ? (
            <>
              <li className="fas fa-concierge-bell fa-4x icon-color"></li>
              <p className="mt-2 description text-center w-75 mx-auto">
                No Active Appointments
              </p>
            </>
          ) : (
            <div className="list-group">
              {this.props.activeAppointments.map((appointment) => {
                return (
                  <AppointmentHeader
                    appointment={appointment}
                  ></AppointmentHeader>
                );
              })}
            </div>
          )}

          <hr className="mb-5" />
          <p className="mt-2 description text-left mx-auto sub-header">
            Appointments History
          </p>
          {this.props.appointmentsHistory.length === 0 ? (
            <>
              <li className="fas fa-history fa-4x icon-color"></li>
              <p className="mt-2 description text-center w-75 mx-auto">
                No Appointments History yet
              </p>
            </>
          ) : (
            <></>
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

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
