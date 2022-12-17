import React from "react";
import "./Portfolio.css";
import Items from "./Menu";
import WorkCard from "./WorkCard";

const Portfolio = () => {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">Projects</h2>

      <div className="work_container grid">
        {Items.map((item) => {
          return <WorkCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
