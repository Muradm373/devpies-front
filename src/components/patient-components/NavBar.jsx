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

class NavBar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
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
  //   getBrand = () => {
  //     var name;
  //     {Object.keys(this.props.routes).map((prop, key) => {
  //       if (prop.collapse) {
  //         prop.views.map((prop, key) => {
  //           if (prop.path === this.props.location.pathname) {
  //             name = prop.name;
  //           }
  //           return null;
  //         });
  //       } else {
  //         if (prop.redirect) {
  //           if (prop.path === this.props.location.pathname) {
  //             name = prop.name;
  //           }
  //         } else {
  //           if (prop.path === this.props.location.pathname) {
  //             name = prop.name;
  //           }
  //         }
  //       }
  //       return null;
  //     });
  //     return name;
  //   };
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
              <NavItem>
                <Link to="#pablo" className="nav-link">
                  <i className="fas fa-envelope fa-1x" />
                  <p>
                    <span className="d-lg-none d-md-block">Notifications</span>
                  </p>
                </Link>
              </NavItem>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="fas fa-user fa-1x" />
                  <p>
                    <span className="d-lg-none d-md-block">Profile</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Settings</DropdownItem>
                  <DropdownItem tag="a">Sign out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
