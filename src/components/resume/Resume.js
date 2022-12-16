import React from "react";
import "./Resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Education</h2>

      <div className="resume_container grid">
        {/* Education  */}
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return <Card key={id} val={val} />;
            }
          })}
        </div>
        {/* experience  */}
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return <Card key={id} val={val} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
