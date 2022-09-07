import React from "react";

const ImpactCard = (props) => {
  return (
    <div className="rounded-lg bg-white shadow impact-card impact">
      <dd className="slide-stat-title font-bold">{props.stat}</dd>
      <dt className="impact-body mb-0 lg:mb-4">{props.desc}</dt>
      <p className="impact-mute">{props.descInfo}</p>
    </div>
  );
};

export default ImpactCard;
