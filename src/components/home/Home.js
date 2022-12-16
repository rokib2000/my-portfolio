import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Md Nazrul Islam</h1>
        <span className="home_education">I'm a Front-End developer</span>
      </div>
    </section>
  );
};

export default Home;
