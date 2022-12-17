import React from "react";

const WorkCard = ({ item }) => {
  const { image, title, description, github_server, github_client, live_website } = item;
  return (
    <div className="work_card">
      <div className="work_thumbnail">
        <img src={image} alt="" className="work_image" />
        <div className="work_mask"></div>
      </div>

      <a href="#" className="work_details">
        See Details
      </a>
      <h3 className="work_title">{title}</h3>
      <a href="#" className="work_button1">
        <i className="icon-link work_button-icon"></i>
      </a>
      <a href="#" className="work_button2">
        <i className="icon-social-github work_button-icon"></i>
      </a>
      <a href="#" className="work_button3">
        <i className="icon-social-github work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkCard;
