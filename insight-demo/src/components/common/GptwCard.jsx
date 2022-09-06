import React from "react";

const GptwCard = (props) => {
  return (
    <div className="border-0 p-2 lg:p-10 text-center">
      <dd className="flex justify-center items-center gptw-svg-cont">
        {props.svg ? (
          <img className="p-2 lg:p-10 gptw-svg" src={props.svg} alt="" />
        ) : (
          ""
        )}
      </dd>
      <dt className="mt-2 leading-6 text-center gptw-body">{props.title}</dt>
    </div>
  );
};

export default GptwCard;
