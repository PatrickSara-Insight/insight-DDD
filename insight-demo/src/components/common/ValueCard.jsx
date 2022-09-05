import React from "react";

const ValueCard = (props) => {
  return (
    <div className="rounded-md bg-white shadow culture-card culture">
      <dd
        className={`${props.bg} rounded-md text-center py-4 culture-card-header border-0`}
      >
        <h3 className="card-title font-bold">{props.title}</h3>
      </dd>
      <dt className="card-body gray text-center my-5 p-16">{props.desc}</dt>
    </div>
  );
};

export default ValueCard;
