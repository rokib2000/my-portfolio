import React from "react";
import "./About.css";
import Image from "../../assets/img/img2.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_image" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Md Nazrul Islam Rakib. I'm a web developer. I am an expert in Html, CSS, Tailwind, Bootstrap,
              Javascript, ReactJS, Node Js, Firebase and MongoDB. As a web developer, I know everything about
              front-end-developers from basic to advanced level. My previous learning experience strengthened my
              abilities. I consider myself a quick learner, self-motivated, responsible, disciplined and
              deadline-oriented person who can work under pressure and solve problems in complex situations with
              analytical knowledge and latest technology.
            </p>
            <a href="#" className="btn">
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
