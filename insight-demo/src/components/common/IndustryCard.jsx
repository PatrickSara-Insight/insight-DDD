import React from "react";

const IndustryCard = (props) => {
  return (
    <div className="p-2 lg:p-10 rounded-md shadow text-center bg-white industry-card industry">
      <dd className="flex justify-center items-center industry-svg-cont">
        {props.svg ? (
          <img className="industry-svg" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="industry-card-title mt-2 leading-10 text-center font-bold">
        {props.title}
      </dt>
    </div>
  );
};

export default IndustryCard;
