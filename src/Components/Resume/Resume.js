import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Resume.scss";
import "../../style/base/_typography.scss";
import Project from "../Project/Project";

const Resume = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div id="resume" class="yui-t7">
        <div id="inner">
          <div id="hd">
            <div class=" row">
              <div class="first col-md-8">
                <h1>Hridoy Khan</h1>
                <h2>Web Developer</h2>
              </div>
              <div class="col-md-4">
                <div class="contact-info">
                  <h3>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      id="pdf"
                      href="https://drive.google.com/file/d/1wuVp4cpQ5eVBA0KpiNTIqlzrWkuwZdIT/view?usp=sharing"
                    >
                      Download PDF
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:khanmuhammadhridoy@gmail.com">
                      khanmuhammadhridoy@gmail.com
                    </a>
                  </h3>
                  <h3>(+880) 01768 949414</h3>
                  <h3>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/khanmuhammadhridoy"
                    >
                      GitHub
                    </a>{" "}
                    •{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/khanhridoy/"
                    >
                      Linkedin
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="yui-gf">
            <div class="yui-u first">
              <h2>Skills</h2>
            </div>
          </div>
          <div class="row">
            <p className="col-md-3">
              <div class=" first">
                <h2>Expert</h2>
              </div>
              <div class="">
                <ul class="talent">
                  <li>React JS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>ES6</li>
                  <li>Bootstrap</li>
                  <li class="last">MATERIAL-UI</li>
                </ul>
              </div>
            </p>
            <p className="col-md-3">
              <div class=" first">
                <h2>Comfortable</h2>
              </div>
              <ul class="talent">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Netlify</li>
                <li class="last">Heroku</li>
              </ul>
            </p>
            <p className="col-md-3">
              <div class=" first">
                <h2>Familiar</h2>
              </div>
              <ul class="talent">
                <li>NodeJS</li>
                <li>Redux</li>
                <li class="last">TypeScript</li>
              </ul>
            </p>
            <p className="col-md-3">
              <div class=" first">
                <h2>Tools</h2>
              </div>
              <ul class="talent">
                <li> VS Code</li>
                <li>Git/GitHub</li>
                <li class="last">Chrome Dev Tool</li>
              </ul>
            </p>
          </div>
          <div id="bd">
            <p class="yui-gf">
              <div class=" first">
                <h2>Objective</h2>
              </div>
              <p>
                Quality-focused and results-driven professional seeking a
                position as a web developer where I can use my skills to enhance
                the user experience.
              </p>
            </p>

            <Project></Project>
            <p class="">
              <div class=" first">
                <h2>Education</h2>
              </div>
              <div>
                <h2>National University, Bangladesh</h2>
                <h3>BSC in CSE (3rd semester)</h3>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
