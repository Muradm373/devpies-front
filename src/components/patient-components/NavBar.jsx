import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { setMenu, signOut } from "../../actions/Actions";

class NavBar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    notificationOpen: false,
    color: "transparent",
  };
  sidebarToggle = React.createRef();
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "white",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  dropdownToggle = (e) => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  notificationToggle = (e) => {
    this.setState({
      notificationOpen: !this.state.notificationOpen,
    });
  };

  openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white",
      });
    } else {
      this.setState({
        color: "transparent",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      this.setState({ color: "white" });
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={this.state.color}
        expand="lg"
        className={"navbar-absolute fixed-top"}
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.notificationOpen}
                toggle={(e) => this.notificationToggle(e)}
              >
                <DropdownToggle nav>
                  <i className="fas fa-bell fa-2x nav-icon-color ml-3" />
                  <p>
                    <span className="d-lg-none d-md-block">Notifications</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <div
                    class="dropdown-list  dropdown-menu-right shadow animated--grow-in show"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 class="dropdown-header">Alerts Center</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 12, 2020</div>
                        <span class="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-success">
                          <i class="fas fa-user text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 7, 2020</div>
                        <span class="font-weight-bold">
                          A new appointment is pending
                        </span>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-warning">
                          <i class="fas fa-search text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">December 2, 2020</div>
                        <span class="font-weight-bold">
                          You were listed in search 10 times this week
                        </span>
                      </div>
                    </a>
                    <a
                      class="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Notifications
                    </a>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle nav>
                  <i className="fas fa-user fa-2x nav-icon-color ml-3" />
                  <p>
                    <span className="d-lg-none d-md-block">Profile</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    onClick={() => this.props.setMenu("My data")}
                  >
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={() => this.props.userSignOut()}
                  >
                    Sign out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
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
    userSignOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
