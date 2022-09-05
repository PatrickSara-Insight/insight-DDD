import React from "react";

const GptwCard = (props) => {
  return (
    <div className="border-b border-gray-100 p-10 text-center sm:border-0 sm:border-r">
      <dd className="flex justify-center items-center gptw-svg-cont">
        {props.svg ? (
          <img className="gptw-svg p-10" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="mt-2 leading-6 text-center gptw-body">{props.title}</dt>
    </div>
  );
};

export default GptwCard;
