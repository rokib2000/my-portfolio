import React from "react";
import "./Skills.css";
import skill1 from "../../assets/skills/skill1.png";
import skill2 from "../../assets/skills/skill2.png";
import skill3 from "../../assets/skills/skill3.png";
import skill4 from "../../assets/skills/skill4.png";
import skill5 from "../../assets/skills/skill5.png";
import skill6 from "../../assets/skills/skill6.png";
import skill7 from "../../assets/skills/skill7.png";
import skill8 from "../../assets/skills/skill8.png";
import skill9 from "../../assets/skills/skill9.png";
import skill10 from "../../assets/skills/skill10.png";
import skill11 from "../../assets/skills/skill11.png";
import skill12 from "../../assets/skills/skill12.png";
import skill13 from "../../assets/skills/skill13.png";
import skill14 from "../../assets/skills/skill14.png";
import skill15 from "../../assets/skills/skill15.png";
import skill16 from "../../assets/skills/skill16.png";

const Skills = () => {
  const skills = [
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
    skill9,
    skill10,
    skill11,
    skill12,
    skill13,
    skill14,
    skill15,
    skill16,
  ];

  return (
    <section className="skills container section" id="skills">
      <h2 className="section_title">Skills</h2>

      <div className="skills_container grid">
        {skills.map((skill, indx) => {
          return (
            <div className="skills_card" key={indx}>
              <div className="skills_thumb">
                <img src={skill} alt="" className="skills_image" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
