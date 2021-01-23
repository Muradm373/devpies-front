import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientHome from "./components/PatientHome";
import DoctorHome from "./components/DoctorHome";
import Login from "./components/Login";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return props.authUser !== undefined ? (
              props.userType === "ADMIN" ? (
                <DoctorHome />
              ) : props.userType === "USER" ? (
                <PatientHome />
              ) : props.userType === "DOCTOR" ? (
                <DoctorHome />
              ) : props.userType === "REPRESENTATIVE" ? (
                <PatientHome />
              ) : (
                <Login />
              )
            ) : (
              <Login />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={() => {
            return <div> Register </div>;
          }}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // signIn: (authUser) => {
    //   dispatch(signIn(authUser));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
