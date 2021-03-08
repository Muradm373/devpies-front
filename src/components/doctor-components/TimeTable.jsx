import React, { Component } from "react";
import {getListOfWeeklyAppointments} from "../../actions/DoctorActions"
import {connect} from "react-redux"

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSlots: this.setTimeSlots(),
      timeTable: this.renderTimes(10),
      val: 0,
      dateTime: props.dateTime,
    };
  }

  componentWillReceiveProps(props){
     this.parseAppointments(props.weeklyAppointments)
  }
  setTimeSlots() {
    let timeSlots = [];

    for (let i = 0; i < 10; i++) {
      timeSlots.push(
        <div>
          {8 + i}:00 - {9 + i}:00
        </div>
      );
    }

    return timeSlots;
  }

  parseAppointments(appointments){
    
    appointments.forEach(appointment => {
       this.colorSlot(new Date(appointment.dateOfAppointment).getHours()-7, new Date(appointment.dateOfAppointment).getDay(), appointment)
    });
  }

  colorSlot(timeSlot, week, appointment) {
    let timeTable = this.state.timeTable;
    timeTable[(timeSlot - 1) * 7 + week - 1] = (
      <div
        className="accent-green-gradient"
        onClick={() => {
          this.colorSlot(timeSlot, week);
        }}

       
      >
         <p className="text-center mx-auto">{appointment.patient.username}</p>
      </div>
    );
    this.setState({ val: this.state.val + 1 });
    console.log(this.props);
  }

  renderTimes(timeIntervals) {
    let table = [];

    for (let timeSlot = 1; timeSlot <= timeIntervals; timeSlot++)
      for (let weekDays = 1; weekDays <= 7; weekDays++) {
        // if (weekDays === 6 || weekDays === 7)
        //   table.push(
        //     <div
        //       className="weekend"
        //       onClick={() => {
        //         this.colorSlot(timeSlot, weekDays);
        //       }}
        //     ></div>
        //   );
        // else
        table.push(
          <div
            onClick={() => {
              this.colorSlot(timeSlot, weekDays);
            }}
          ></div>
        );
      }

    return table;
  }

  getDate(date, weekDaySelected) {
    let weekDay = parseInt(date.getDay());
    let finalDate = date;
    finalDate.setDate(date.getDate() - weekDay + weekDaySelected);

     return finalDate.toLocaleDateString();
  }
  render() {
    return (
      <div class="timetable">
        <div class="week-names">
          <div>
            monday <br />
            {this.getDate(this.props.dateTime, 1)}
          </div>
          <div>
            tuesday <br />
            {this.getDate(this.props.dateTime, 2)}
          </div>
          <div>
            wednesday <br />
            {this.getDate(this.props.dateTime, 3)}
          </div>
          <div>
            thursday <br />
            {this.getDate(this.props.dateTime, 4)}
          </div>
          <div>
            friday <br />
            {this.getDate(this.props.dateTime, 5)}
          </div>
          <div class="weekend">
            saturday <br />
            {this.getDate(this.props.dateTime, 6)}
          </div>
          <div class="weekend">
            sunday <br />
            {this.getDate(this.state.dateTime, 7)}
          </div>
        </div>
        <div class="time-interval">{this.state.timeSlots}</div>
        <div class="content-timetable">{this.state.timeTable}</div>
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
    getListOfWeeklyAppointments: (date) => {
      getListOfWeeklyAppointments (dispatch, date);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( TimeTable );
