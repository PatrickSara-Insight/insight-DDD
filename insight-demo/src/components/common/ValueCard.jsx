import React from "react";

const ValueCard = (props) => {
  return (
    <div className="rounded-md bg-white shadow culture-card culture mx-4">
      <dd
        className={`${props.bg} rounded-md text-center culture-card-header border-0`}
      >
        <h3 className="card-title font-bold">{props.title}</h3>
      </dd>
      <dt className="card-body value-card-body gray text-center mt-2">
        {props.desc}
      </dt>
    </div>
  );
};

export default ValueCard;
