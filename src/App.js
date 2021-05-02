import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Resume from "./Components/Resume/Resume";
library.add(fab);
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
