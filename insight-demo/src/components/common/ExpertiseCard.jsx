import React from "react";

const ExpertiseCard = (props) => {
  return (
    <div className="rounded-lg bg-white shadow expertise-card expertise">
      <dd className="flex justify-center items-center expertise-svg-cont">
        {props.svg ? (
          <img className="expertise-svg" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="card-title expertise-card-title gray text-center">
        {props.title}
      </dt>
      <p className="card-body text-center">{props.descInfo}</p>
    </div>
  );
};

export default ExpertiseCard;
