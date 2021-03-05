import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../common/GoogleMap";
import { getListOfHospitals } from "../../actions/PatientActions";

class Hospitals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getListOfHospitals();
  }

  render() {
    return (
      <div>
        <div class="header text-center">
          <h2 class="title">Hospitals</h2>
          <p class="category description text-center">
            Here you can find the list of hospitals.
          </p>
        </div>
        <div>
          <GoogleMap hospitals={this.props.hospitals}></GoogleMap>
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
  return {  getListOfHospitals: () => {
    getListOfHospitals(dispatch)
  },};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
