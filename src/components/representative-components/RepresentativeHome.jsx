import React, { Component } from "react";
import Sidebar from "../patient-components/Sidebar";
import NavBar from "../patient-components/NavBar";
import { routes } from "../../utilities/RepresentativeRoutes";
import { connect } from "react-redux";
import { setMenu } from "../../actions/Actions";

class RepresentativeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return  ( <div>
    <Sidebar routes={routes} backgroundColor={"blue"} />

    <div id="body">
      <main>
        <NavBar></NavBar>
        <div className="main-panel ps ps--active-y">
          <div className="content ">
            <div className="pan-header"></div>
            {this.props.menu === 0 ? routes["Doctors"].component : routes[this.props.menu].component}
          </div>
        </div>
      </main>
    </div>
  </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeHome);
