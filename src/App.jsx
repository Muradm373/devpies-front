import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientHome from "./components/patient-components/PatientHome";
import DoctorHome from "./components/DoctorHome";
import Login from "./components/Login";
import { connect } from "react-redux";
import RepresentativeHome from "./components/representative-components/RepresentativeHome";
import AdminHome from "./components/admin-components/AdminHome";

function App(props) {
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
                <RepresentativeHome />
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
