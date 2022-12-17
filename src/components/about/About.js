import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_image" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and
              building and customization, also I am good at WordPress.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          {/* <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"></h3>
                <span className="skills_number"></span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
