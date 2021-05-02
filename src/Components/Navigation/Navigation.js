import React from "react";
import "./Navigation.scss";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div id="navigation" className="sticky-top">
      <Navbar className=" nav" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <a className="cta-btn cta-btn--hero" href="/#hero">
              Home
            </a>
            <a className="cta-btn cta-btn--hero" href="/#about">
              About
            </a>
            <a className="cta-btn cta-btn--hero" href="/#projects">
              Portfolio
            </a>
            <a className="cta-btn cta-btn--hero" href="/#contact">
              Contact
            </a>
            <Link className="cta-btn cta-btn--hero" to="/resume">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
