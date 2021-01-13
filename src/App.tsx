import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Table from "./components/Table";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
