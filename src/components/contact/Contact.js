import React from "react";
import HeaderSocials from "../home/HeaderSocials";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
          <p className="contact_details">
            Email: <a href="mailto:rokib0w1@gmail.com">rokib0w1@gmail.com</a>
          </p>
          <p className="contact_details">
            Phone: <a href="tel:+8801741815113">+880 1741 815113</a>
          </p>
          <HeaderSocials />
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder="Enter your name" />
            </div>
            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder="Enter your email" />
            </div>
          </div>

          <div className="contact_form-div">
            <input type="text" className="contact_form-input" placeholder="Enter your subject" />
          </div>
          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
            ></textarea>{" "}
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
