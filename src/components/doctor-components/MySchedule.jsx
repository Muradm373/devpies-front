import React, { Component } from "react";
import TimeTable from "./TimeTable";
import DatePicker from "react-datepicker";
import {getListOfWeeklyAppointments} from "../../actions/DoctorActions"
import "react-datepicker/dist/react-datepicker.css";
import {connect} from "react-redux"

class MySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount(props){
    let date = new Date();

    this.setDate(date)
  }
  
  setDate(date){
    let weekDay = parseInt(date.getDay());
    let finalDate = date;
    finalDate.setDate(date.getDate() - weekDay + 1);

    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(finalDate);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(finalDate);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(finalDate);

     finalDate.toLocaleDateString();

     let str = `${ye}-${mo}-${da} 00:00`;
     this.props.getListOfWeeklyAppointments(str)
  }

  onDateChange(date) {
    
    this.setDate(date)
    this.setState({ value: date });
  }
  render() {
    return (
      <div className="card p-5">
        <div className=" text-center">
          <div className="typography-line text-center pl-0 mb-0">
            <h5>My Schedule</h5>
            <p className="description text-center w-75 mx-auto mt-0">
              Here you will see your schedule
            </p>
          </div>
        </div>

        <div>
          <div>
            <DatePicker
              selected={this.state.value}
              onChange={(val) => this.onDateChange(val)}
            />
          </div>
          <TimeTable dateTime={this.state.value}></TimeTable>
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
    getListOfWeeklyAppointments: (date) => {
      getListOfWeeklyAppointments (dispatch, date);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( MySchedule );
