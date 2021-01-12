import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientHome from "./components/PatientHome";

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
