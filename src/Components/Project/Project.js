import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";
// import PortfolioContext from "../Context/Context";
import "./Project.scss";

const Project = () => {
  // const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title text-center">PROJECTS</h2>
          </Fade>
          <Row>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Electrzoid</h3>
                  <div>
                    <p>
                      <ul>
                        <li> Electronic service-based website.</li>
                        <li>Users can order a service. </li>
                        <li>
                          Admin can manage service and also add Engineer to
                          Website.
                        </li>
                        <li>Stripe used for payment gateways.</li>
                        <li>Authentication is done by Firebase.</li>
                        <li>React Router used for routing.</li>
                        <li>React Bootstrap used for a responsive design.</li>
                        <li>MongoDB used for database management.</li>
                        <li>Heroku used for the backend database hosting.</li>
                      </ul>
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://electrzoid.web.app/"
                  >
                    See Live
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/khanmuhammadhridoy/Electrzoid"
                  >
                    Source Code
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://electrzoid.web.app/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img
                          width="100%"
                          src="https://i.ibb.co/xFMMxTZ/screencapture-electrzoid-web-app-2021-05-02-08-53-12-Copy.png"
                          alt=""
                        />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Newrite</h3>
                  <div>
                    <p>
                      <ul>
                        <li> Book Shop website.</li>
                        <li>Users can buy books. </li>
                        <li>Admin can add to remove any book from shop.</li>
                        <li>Authentication is done by Firebase.</li>
                        <li>React Router used for routing.</li>
                        <li>React Bootstrap used for a responsive design.</li>
                        <li>MongoDB used for database management.</li>
                        <li>Heroku used for the backend database hosting.</li>
                      </ul>
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://neewrite.web.app/"
                  >
                    See Live
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/khanmuhammadhridoy/Newriter"
                  >
                    Source Code
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://neewrite.web.app/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img
                          width="100%"
                          src="https://i.ibb.co/jbRj4Bb/Capture.pnghttps://i.ibb.co/jbRj4Bb/Capture.png"
                          alt=""
                        />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Riders Nest</h3>
                  <div>
                    <p>
                      <ul>
                        <li> Travelers Website</li>
                        <li>
                          Users can select any ride to journey to the selected
                          location.
                        </li>
                        <li>Authentication is done by Firebase.</li>
                        <li>React Router used for routing.</li>
                        <li>React Bootstrap used for a responsive design.</li>
                        <li>Material UI used for a responsive design.</li>
                        {/* <li>MongoDB used for database management.</li>
                        <li>Heroku used for the backend database hosting.</li> */}
                      </ul>
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://riders-nest.web.app/"
                  >
                    See Live
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href="https://github.com/khanmuhammadhridoy/riders-nest"
                  >
                    Source Code
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a
                    href="https://riders-nest.web.app/"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img
                          width="100%"
                          src="https://i.ibb.co/kgJMT3J/screencapture-riders-nest-web-app-2021-05-02-08-12-34.png"
                          alt=""
                        />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Project;
