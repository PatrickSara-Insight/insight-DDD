import React from "react";

const ValueCard = (props) => {
  return (
    <div className="rounded-md bg-white shadow culture-card culture mx-4">
      <dd
        className={`${props.bg} rounded-md text-center py-1 lg:py-4 culture-card-header border-0`}
      >
        <h3 className="card-title font-bold">{props.title}</h3>
      </dd>
      <dt className="card-body gray text-center p-4 mt-2 lg:p-16">
        {props.desc}
      </dt>
    </div>
  );
};

export default ValueCard;
