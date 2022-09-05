import React from "react";

const EmployeeCard = (props) => {
  return (
    <li className="col-span-1 p-10 flex flex-col rounded-lg bg-white text-center shadow employee">
      <img
        className="mx-auto h-64 w-64 flex-shrink-0 rounded-full"
        src={props.src}
        alt=""
      />

      <h3 className="mt-6 card-title font-bold gray">{props.name}</h3>
      <dd className="mt-1 card-body gray">{props.position}</dd>
      <dt className="card-body gray text-center p-20">{props.quote}</dt>
    </li>
  );
};

export default EmployeeCard;
