import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./patient-components/Sidebar";
import NavBar from "./patient-components/NavBar";
import { routes } from "../utilities/Routes";

class PatientHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log(props);
  }

  render() {
    return (
      <div>
        <Sidebar routes={routes} backgroundColor={"blue"} />

        <div id="body">
          <main>
            <NavBar></NavBar>
            <div>
              <div className="panel-header panel-header-sm"></div>
              {routes[this.props.menu].component}
            </div>
          </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientHome);
