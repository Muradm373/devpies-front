import React, { Component } from "react";
import { connect } from "react-redux";
import {
  signIn,
  doSignIn,
  getCurrentUser,
  doCreateUserWithEmailAndPassword,
} from "../actions/Actions";

const INITIAL_STATE = {
  name: "",
  surname: "",
  password: "",
  email: "",
  repeatedPassword: "",
  contact: "",
  address: "",
  showResponseLabel: "",
  responseLabel: "",
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }
  registerAccount() {
    const {
      name,
      surname,
      password,
      email,
      repeatedPassword,
      contact,
      address,
    } = this.state;

    if (
      name === "" ||
      surname === "" ||
      password === "" ||
      email === "" ||
      password !== repeatedPassword
    ) {
      this.setState({
        showResponseLabel: "true",
        responseLabel: "Fill data correctly",
      });
    } else {
      doCreateUserWithEmailAndPassword(
        name,
        surname,
        password,
        email,
        contact,
        address
      )
        .then((response) => {
          return doSignIn(email, password);
        })
        .then((response) => {
          console.log(response);
          let user = {
            user: { uid: 0, token: response.data },
          };
          this.setState({ email: "", password: "" });
          return user;
        })
        .then((user) => {
          let userDetails = getCurrentUser(user);
          return userDetails;
        })
        .then((data) => {
          this.props.signIn(data.data);
        })
        .catch((error) => {
          //TODO: show response label
          console.log("request failed:");
          console.log(error);
          this.setState({
            showResponseLabel: "true",
            responseLabel: "Something went wrong",
          });
        });
    }
  }

  login = (email, password) => {
    doSignIn(email, password)
      .then((response) => {
        let user = { user: { uid: 0, token: response.headers.authorization } };
        this.props.signIn(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5 w-50 mx-auto">
          <div className="card-body p-0">
            <div>
              <div>
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Register</h1>
                    {this.state.showResponseLabel ? (
                      <h6 className="h6 mb-4 response-label-error">
                        {this.state.responseLabel}
                      </h6>
                    ) : (
                      ""
                    )}
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={this.state.name}
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                          placeholder={"Name"}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={this.state.surname}
                          onChange={(e) => {
                            this.setState({ surname: e.target.value });
                          }}
                          placeholder={"Surname"}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        placeholder={"Email"}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={this.state.password}
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                          placeholder={"Password"}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={this.state.repeatedPassword}
                          onChange={(e) => {
                            this.setState({ repeatedPassword: e.target.value });
                          }}
                          placeholder={"Repeat password"}
                        />
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary btn-user btn-block"
                      onClick={() => this.registerAccount()}
                    >
                      {"Register Account"}
                    </a>
                    <hr />
                    <a href="#" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i>{" "}
                      {"Register using Google"}
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="#">
                      {"Forgot password"}
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="/#">
                      {"Already have an Account"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
    signIn: (authUser) => {
      dispatch(signIn(authUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
