import React from "react";

const GptwCard = (props) => {
  return (
    <li className="col-span-1 rounded-md gptw-card gptw shadow bg-slate-200">
      <div className={`${props.bg} py-2`}>
        <dd className="card-title font-bold">{props.stat}</dd>
      </div>
      <dl className="mt-2 p-5 flex flex-grow flex-col justify-between">
        <dd className="card-body">{props.desc}</dd>
      </dl>
    </li>
  );
};

export default GptwCard;
