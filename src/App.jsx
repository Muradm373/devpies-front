import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            <div className="App"></div>;
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
