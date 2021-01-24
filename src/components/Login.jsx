import React, { Component } from "react";
import { signIn, doSignIn, getCurrentUser } from "../actions/Actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showResponseLabel: "",
      responseLabel: "",
    };
  }
  login() {
    const { email, password } = this.state;

    if (email === "" || password === "") {
      this.setState({
        showResponseLabel: "true",
        responseLabel: "Fill data correctly",
      });
    } else {
      doSignIn(email, password)
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

  render() {
    return (
      <div>
        <div className="container" style={{ width: "100%", height: "100%" }}>
          <div className="row justify-content-center">
            <div className="col-xl-6 ">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="">
                    <div>
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">{"Login"}</h1>
                          {this.state.showResponseLabel ? (
                            <h6 className="h6 mb-4 response-label-error">
                              {this.state.responseLabel}
                            </h6>
                          ) : (
                            ""
                          )}
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="=InputEmail"
                              aria-describedby="emailHelp"
                              placeholder={"Email"}
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="=InputPassword"
                              placeholder={"Password"}
                              value={this.state.password}
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                {"Remember me"}
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="btn btn-primary btn-user btn-block"
                            onClick={() => this.login()}
                          >
                            {"Login"}
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i>{" "}
                            {"Login with Google"}
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="#">
                            {"Forgot password"}
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register">
                            {"Create account"}
                          </a>
                        </div>
                      </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
