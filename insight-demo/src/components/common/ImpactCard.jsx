import React from "react";

const ImpactCard = (props) => {
  return (
    <div className="rounded-lg bg-white shadow impact-card impact p-10">
      <dd className="slide-stat-title">{props.stat}</dd>
      <dt className="impact-body mb-4">{props.desc}</dt>
      <p className="impact-mute">{props.descInfo}</p>
    </div>
  );
};

export default ImpactCard;
