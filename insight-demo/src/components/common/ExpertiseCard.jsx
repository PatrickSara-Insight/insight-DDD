import React from "react";

const ExpertiseCard = (props) => {
  return (
    <div className="rounded-lg bg-white shadow expertise-card expertise p-10">
      <dd className="flex justify-center items-center expertise-svg-cont">
        {props.svg ? (
          <img className="expertise-svg px-10" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="card-title gray text-center my-3">{props.title}</dt>
      <p className="card-body text-center">{props.descInfo}</p>
    </div>
  );
};

export default ExpertiseCard;
