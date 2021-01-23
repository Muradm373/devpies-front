import React, { Component } from "react";
import TimeTable from "./TimeTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
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

export default MySchedule;
