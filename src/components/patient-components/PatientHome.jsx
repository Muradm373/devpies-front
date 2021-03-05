import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { routes } from "../../utilities/Routes";
import { setMenu } from "../../actions/Actions";
import { getPatientProfile } from "../../actions/PatientActions";

class PatientHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.setMenu("AI Assistant");
  }

  componentDidMount(){
    
    this.props.getPatientProfile();
  }

  render() {
    return (
      <div>
        <Sidebar routes={routes} backgroundColor={"blue"} />

        <div id="body">
          <main>
            <NavBar routes={routes}></NavBar>
            <div className="main-panel ps ps--active-y">
              <div className="content ">
                <div className="pan-header"></div>
                {this.props.menu === 0 ? routes["AI Assistant"].component : routes[this.props.menu].component}
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
    getPatientProfile: () => {
      getPatientProfile(dispatch)
    },
    setMenu: (menu) => {
      dispatch(setMenu(menu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientHome);
