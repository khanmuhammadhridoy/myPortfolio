import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Resume from "./Components/Resume/Resume";
// import Blog from "./Components/Blog/Blog";
library.add(fab);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home/" element={<Navigate to="/" />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/resume" element={<Blog />} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
