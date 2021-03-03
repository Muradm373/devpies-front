import React, { Component } from "react";
import Sidebar from "../patient-components/Sidebar";
import NavBar from "../patient-components/NavBar";
import { routes } from "../../utilities/RepresentativeRoutes";
import { connect } from "react-redux";

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
            {routes[this.props.menu].component}
          </div>
        </div>
      </main>
    </div>
  </div>);
  }
}

export default RepresentativeHome;
