import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientHome from "./components/PatientHome";
import DoctorHome from "./components/DoctorHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="App">
                <DoctorHome></DoctorHome>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/patient"
          render={() => {
            return (
              <div className="App">
                <PatientHome></PatientHome>
              </div>
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

export default App;
