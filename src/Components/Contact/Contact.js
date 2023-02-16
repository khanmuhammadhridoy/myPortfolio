import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../Context/Context";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';

// import { useForm } from "react-hook-form";
import "./Contact.scss";
import "../../style/components/_buttons.scss";
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  // const {
  //   register,

  //   formState: { errors },
  // } = useForm();
  function sendEmail(e) {
    e.preventDefault();
    // console.log("name", e.target.name.value);
    // console.log("sub", e.target.sub.value);
    // console.log("email", e.target.email.value);
    // console.log("message", e.target.message.value);
    emailjs
      .sendForm(
        "service_2rkp1q2",
        "template_1t7nihc",
        e.target,
        "user_5t42H1OVCXsqBdlqnQlIN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title text-center">Contact</h2>
        </Fade>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper text-center">
            <p className="contact-wrapper__text">
              {cta || "Would you like to work with me? Awesome!"}
            </p>
            <form onSubmit={sendEmail}>
              <input
                className="form-control inputBox"
                placeholder="Name"
                name="name"
                required
              />
              <br /> <br />
              <input
                className="form-control inputBox"
                placeholder="Subject"
                name="sub"
                required
              />
              <br /> <br />
              <input
                className="form-control inputBox"
                placeholder="Email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <br /> <br />
              <textarea
                className="form-control inputBox"
                placeholder="Your Message"
                name="message"
                required
              />
              <br /> <br />
              <input
                className="cta-btn submitBtn cta-btn--resume"
                type="submit"
                value={btn || "Let's Talk"}
              />
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
