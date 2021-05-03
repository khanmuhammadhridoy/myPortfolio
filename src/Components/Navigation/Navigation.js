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
            <a className="cta-btn text-color-main" href="/home">
              Home
            </a>
            <a className="cta-btn text-color-main" href="/#about">
              About
            </a>
            <a className="cta-btn text-color-main" href="/#projects">
              Portfolio
            </a>
            <a className="cta-btn text-color-main" href="/#contact">
              Contact
            </a>
            {/* <Link className="cta-btn text-color-main" to="/blog">
              Blog
            </Link> */}
            <Link className="cta-btn text-color-main" to="/resume">
              Resume
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
