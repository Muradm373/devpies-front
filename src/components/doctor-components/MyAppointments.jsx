import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentHeader from "./AppointmentHeader";
import Swiper from "swiper";

class MyAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.swiper = new Swiper(".blog-slider", {
      direction: "vertical",
      spaceBetween: 30,
      effect: "fade",
      mousewheel: {
        invert: false,
      },
      //   autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: false,
      },
    });
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
          <p className="mt-2 description text-center  mx-auto sub-header">
            Today you will have next appointments:
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
              <div class="blog-slider">
                <div class="blog-slider__wrp swiper-wrapper">
                  {this.props.myPatients.map((appointment) => {
                    return (
                      <AppointmentHeader
                        appointment={appointment}
                      ></AppointmentHeader>
                    );
                  })}
                </div>
                <div class="blog-slider__pagination"></div>
              </div>
            </div>
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
  return {
    signOut: () => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAppointments);
