import React from "react";

const IndustryCard = (props) => {
  return (
    <div className="p-10 rounded-md shadow text-center bg-white industry-card industry">
      <dd className="flex justify-center items-center industry-svg-cont">
        {props.svg ? (
          <img className="industry-svg p-10" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="mt-2 leading-10 text-center font-bold industry-card-title">
        {props.title}
      </dt>
    </div>
  );
};

export default IndustryCard;
