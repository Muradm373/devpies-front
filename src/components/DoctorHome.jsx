import React, { Component } from "react";
import { routes } from "../utilities/DoctorRoutes";
import Sidebar from "./patient-components/Sidebar";
import NavBar from "./patient-components/NavBar";
import { connect } from "react-redux";
import { setMenu } from "../actions/Actions";

class DoctorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.setMenu("My Appointments");
  }
  render() {
    return (
      <div>
        <Sidebar routes={routes} backgroundColor={"blue"} />
        <div id="body">
          <main>
            <NavBar></NavBar>
            <div className="main-panel ps ps--active-y">
              <div className="content ">
                <div className="pan-header"></div>
                {routes[this.props.menu].component}
              </div>
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
    setMenu: (menu) => {
      dispatch(setMenu(menu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorHome);
