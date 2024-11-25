import React from "react";
import Navigation from "../Navigation/Navigation";
// import "./Resume.scss";
import "../../style/base/_typography.scss";
import Project from "../Project/Project";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div id="resume" className="yui-t7">
        <div id="inner">
          <div id="hd">
            <div className="row">
              <div className="first col-md-8">
                <h1>Hridoy Khan</h1>
                <h2>Web Developer</h2>
              </div>
              <div className="col-md-4">
                <div className="contact-info">
                  <h3>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      id="pdf"
                      href="https://docs.google.com/document/d/1_E95PUPZWeWZgoLGsgc0QhHmiG3mx0jrEp6pB1I6GsU/edit?usp=sharing"
                    >
                      Download PDF
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:khanmuhammadhridoy@gmail.com">
                      khanmuhammadhridoy@gmail.com
                    </a>
                  </h3>
                  <h3>
                    <a href="tel:+8801768949414">(+880) 01768 949414</a>
                  </h3>
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
          <div className="yui-gf">
            <div className="yui-u first">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row">
            <p className="col-md-3">
              <div className=" first">
                <h2>Expert</h2>
              </div>
              <div className="">
                <ul className="talent">
                  <li>React JS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>ES6</li>
                  <li>Bootstrap</li>
                  <li className="last">MATERIAL-UI</li>
                </ul>
              </div>
            </p>
            <p className="col-md-3">
              <div className=" first">
                <h2>Comfortable</h2>
              </div>
              <ul className="talent">
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Netlify</li>
                <li className="last">Heroku</li>
              </ul>
            </p>
            <p className="col-md-3">
              <div className=" first">
                <h2>Familiar</h2>
              </div>
              <ul className="talent">
                <li>NodeJS</li>
                <li>Redux</li>
                <li className="last">TypeScript</li>
              </ul>
            </p>
            <p className="col-md-3">
              <div className=" first">
                <h2>Tools</h2>
              </div>
              <ul className="talent">
                <li> VS Code</li>
                <li>Git/GitHub</li>
                <li className="last">Chrome Dev Tool</li>
              </ul>
            </p>
          </div>
          <div id="bd">
            <p className="yui-gf">
              <div className=" first">
                <h2>Objective</h2>
              </div>
              <p>
                Quality-focused and results-driven professional seeking a
                position as a web developer where I can use my skills to enhance
                the user experience.
              </p>
            </p>
            <div className="resumePro">
              <Project></Project>
            </div>
            <p className="">
              <div className=" first">
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
