import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Resume from "./Components/Resume/Resume";
// import Blog from "./Components/Blog/Blog";
library.add(fab);
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/home">
          <Home></Home>
        </Route> */}
        <Redirect from='/home/' to="/" />
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        {/* <Route path="/blog">
          <Blog></Blog>
        </Route> */}
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
