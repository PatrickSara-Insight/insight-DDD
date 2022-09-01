import React from "react";

const ImpactCard = (props) => {
  return (
    <li className="flex rounded-md shadow-sm impact-card impact">
      <div
        className={`flex items-center justify-center ${props.bg} rounded-l-md p-2`}
      >
        {props.svg ? <img className="impact-svg" src={props.svg} alt="" /> : ""}
      </div>
      <div className="flex flex-1 items-center justify-between rounded-r-md p-8 bg-white">
        <div className="flex-1 px-2 py-0 text-sm">
          <dd className="mt-2 slide-stat-primary gray text-center">
            {props.stat}
          </dd>
          <dt className="mt-2 leading-6 slide-body gray text-center">
            {props.desc}
          </dt>
        </div>
      </div>
    </li>
  );
};

export default ImpactCard;
