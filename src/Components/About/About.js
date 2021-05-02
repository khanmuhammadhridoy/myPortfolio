import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
// import Title from "../Title/Title";
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from "../Context/Context";
import "./About.scss";
import "../../style/base/_typography.scss";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title text-center">About Me</h2>
        </Fade>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img width="60%" src={img} alt="" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">
                  <p>
                    <strong>My Skill Set</strong>
                    <br />
                    <em>Expert:</em> HTML5 • CSS3 • JavaScript • ES6 • Bootstrap
                    • React JS • MATERIAL-UI
                    <br />
                    <em>Comfortable:</em> MongoDB • Firebase • Netlify • Heroku
                    <br />
                    <em>Familiar:</em> NodeJS • Redux • TypeScript
                  </p>
                </p>
                <p className="about-wrapper__info-text">{paragraphThree} </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Download Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
