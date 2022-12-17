import React from "react";
import "./Home.css";
import Me from "../../assets/img/img1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Md Nazrul Islam Rokib</h1>
        <span className="home_education">I'm a Front-End developer</span>

        <HeaderSocials />

        {/* <a href="#contact" className="btn">
          Hire Me
        </a> */}

        <a
          href="https://drive.google.com/file/d/1nRQjpvTKSQMb5bfEeNCw74QywA5JccH4/view?usp=share_link"
          className="btn"
          target="_blank"
        >
          Download Resume
        </a>

        <ScrollDown />
      </div>

      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
