import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { routes } from "../../utilities/Routes";

class PatientHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Sidebar routes={routes} backgroundColor={"blue"} />

        <div id="body">
          <main>
            <NavBar routes={routes} ></NavBar>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientHome);
