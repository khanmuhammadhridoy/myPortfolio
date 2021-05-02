import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../Context/Context";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import "../../style/components/_buttons.scss";
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  const {
    register,
    formState: { errors },
  } = useForm();

  function sendEmail(e) {
    e.preventDefault();
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
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span
                  style={{ fontSize: "16px", color: "red", fontWeight: "500" }}
                >
                  This field is required
                </span>
              )}
              <br /> <br />
              <input
                className="form-control inputBox"
                placeholder="Subject"
                {...register("sub", { required: true })}
              />
              {errors.sub && (
                <span
                  style={{ fontSize: "16px", color: "red", fontWeight: "500" }}
                >
                  This field is required
                </span>
              )}
              <br /> <br />
              <input
                className="form-control inputBox"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                  // validate: true,
                })}
              />
              {errors.email && (
                <span
                  style={{ fontSize: "16px", color: "red", fontWeight: "500" }}
                >
                  This field is required
                </span>
              )}
              <br /> <br />
              <textarea
                className="form-control inputBox"
                placeholder="Your Message"
                {...register("message", {
                  required: true,
                  validate: true,
                })}
              />
              {errors.message && (
                <span
                  style={{ fontSize: "16px", color: "red", fontWeight: "500" }}
                >
                  This field is required
                </span>
              )}
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
