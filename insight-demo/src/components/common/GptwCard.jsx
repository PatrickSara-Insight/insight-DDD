import React from "react";

const GptwCard = (props) => {
  return (
    <li className="flex rounded-md shadow-sm gptw-card gptw">
      <div
        className={`flex items-center justify-center ${props.bg} rounded-l-md p-2 gptw-card-header`}
      >
        <h3 className="card-title">{props.stat}</h3>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-r-md p-8 bg-white">
        <div className="flex-1 px-2 py-0 text-sm">
          <dt className="mt-2 leading-6 slide-body gray text-center">
            {props.desc}
          </dt>
        </div>
      </div>
    </li>
  );
};

export default GptwCard;
