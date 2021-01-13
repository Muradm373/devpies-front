import React, { Component } from "react";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { connect } from "react-redux";
import logo from "../../logo.svg";
import { setMenu } from "../../actions/Actions";

let ps;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.menu === routeName ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div className="sidebar" data-color={this.props.backgroundColor}>
        <div className="logo">
          <a href="/#" className="simple-text logo-mini" target="_blank">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="/#"
            className="simple-text logo-normal text-left"
            target="_blank"
          >
            Devpies
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {Object.keys(this.props.routes).map((prop, key) => {
              return (
                <li className={this.activeRoute(prop)} key={key}>
                  <a
                    className="nav-link"
                    href="/#"
                    onClick={() => this.props.setMenu(prop)}
                  >
                    <div className={"row mx-0 text-left"}>
                      <i
                        className={
                          this.props.routes[prop].icon + " mx-3 mr-3 w-25"
                        }
                      />
                      <p className={"col text-left menu-route p-0"}>
                        {this.props.routes[prop].label}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </Nav>
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
    setMenu: (menu) => {
      dispatch(setMenu(menu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
