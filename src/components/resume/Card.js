import React from "react";

const Card = ({ val }) => {
  return (
    <div className="timeline_item">
      <i className={val.icon}></i>
      <span className="timeline_date">{val.year}</span>
      <h3 className="timeline_title">{val.title}</h3>
      <p className="timeline_text">{val.desc}</p>
    </div>
  );
};

export default Card;
