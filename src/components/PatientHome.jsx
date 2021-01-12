import React, { Component } from "react";
import { connect } from "react-redux";

class PatientHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      userDropdown: false,
    };
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  toggleUserDropdown() {
    this.setState({ userDropdown: !this.state.userDropdown });
  }
  render() {
    let showMenu = this.state.menu ? "" : "sb-sidenav-toggled";
    let showUserDropdown = this.state.userDropdown ? "show" : "";
    return (
      <div className={"sb-nav-fixed " + showMenu}>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">
            Devpies
          </a>
          <button
            className="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle"
            href="/#"
            onClick={() => {
              this.toggleMenu();
            }}
          >
            <i className="fas fa-bars" />
          </button>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="userDropdown"
                href="/#"
                role="button"
                onClick={() => this.toggleUserDropdown()}
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw" />
              </a>
              <div
                className={
                  "dropdown-menu dropdown-menu-right " + showUserDropdown
                }
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="/#">
                  Settings
                </a>
                <a className="dropdown-item" href="/#">
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Appointment</div>
                  <a className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-calendar-check" />
                    </div>
                    My Appointments
                  </a>
                  <a className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-map-marked-alt" />
                    </div>
                    Hospitals
                  </a>
                  <a className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-robot" />
                    </div>
                    AI Help
                  </a>

                  <div className="sb-sidenav-menu-heading">Service</div>
                  <a className="nav-link" href="charts.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-user-cog" />
                    </div>
                    Settings
                  </a>
                  <a className="nav-link" href="charts.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-info" />
                    </div>
                    About
                  </a>
                </div>
              </div>
              <div className="sb-sidenav-footer"></div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Primary Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a
                          className="small text-white stretched-link"
                          href="/#"
                        >
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">Warning Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a
                          className="small text-white stretched-link"
                          href="/#"
                        >
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">Success Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a
                          className="small text-white stretched-link"
                          href="/#"
                        >
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                      <div className="card-body">Danger Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a
                          className="small text-white stretched-link"
                          href="/#"
                        >
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-area mr-1" />
                        Area Chart Example
                      </div>
                      <div className="card-body">
                        <canvas id="myAreaChart" width="100%" height={40} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-bar mr-1" />
                        Bar Chart Example
                      </div>
                      <div className="card-body">
                        <canvas id="myBarChart" width="100%" height={40} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table mr-1" />
                    DataTable Example
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing={0}
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                          </tr>
                          <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                          </tr>
                          <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009/01/12</td>
                            <td>$86,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright © Your Website 2020
                  </div>
                  <div>
                    <a href="/#">Privacy Policy</a>·
                    <a href="/#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
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
