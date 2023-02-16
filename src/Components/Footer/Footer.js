import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
    const [date, setDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const options = { 
      // weekday: 'long',
       year: 'numeric', 
      //  month: 'long', 
      //  day: 'numeric' 
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setDate(formatter.format(today));
    }, []);
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  return (
    <footer className="footer navbar-static-bottom text-center">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <FontAwesomeIcon icon={faAngleUp} />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url, iconName } = network;
              return (
                <a
                  key={id}
                  href={url || "#"}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  {iconName ? (
                    <FontAwesomeIcon icon={["fab", iconName]} />
                  ) : (
                    <FontAwesomeIcon icon={faLink} />
                  )}
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {date}          {/* {new Date().getFullYear()}  */}   -
          <a
            href="https://github.com/khanmuhammadhridoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hridoy Khan
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
