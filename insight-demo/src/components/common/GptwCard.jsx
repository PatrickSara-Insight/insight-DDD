import React from "react";

const GptwCard = (props) => {
  return (
    <div className="px-8 py-5">
      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div className={`flex items-baseline gptw-header ${props.fontColor}`}>
          {props.stat}
        </div>
      </dd>
      <dt className="text-base gptw-body mt-2">{props.desc}</dt>
    </div>
  );
};

export default GptwCard;
