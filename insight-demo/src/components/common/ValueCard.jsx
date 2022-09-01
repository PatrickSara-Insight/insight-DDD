import React from "react";

const ValueCard = (props) => {
  return (
    <li className="col-span-1 flex flex-col rounded-md bg-white text-center shadow culture-card culture">
      <div className={`${props.bg} py-2 culture-card-header`}>
        <h3 className="card-title">{props.title}</h3>
      </div>
      <dl className="mt-2 p-5 flex flex-grow flex-col justify-between">
        <dd className="card-body">{props.desc}</dd>
      </dl>
    </li>
  );
};

export default ValueCard;
