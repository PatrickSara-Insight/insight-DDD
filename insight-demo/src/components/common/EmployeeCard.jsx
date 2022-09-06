import React from "react";

const EmployeeCard = (props) => {
  return (
    <li className="col-span-1 p-2 lg:p-10 flex flex-col rounded-lg bg-white text-center shadow employee">
      <img
        className="mx-auto h-16 w-16 lg:h-64 lg:w-64 flex-shrink-0 rounded-full"
        src={props.src}
        alt=""
      />
      <div className="flex flex-col justify-start items-center">
        <h3 className="mt-2 card-title font-bold gray">{props.name}</h3>
        <dd className="mt-1 card-body gray">{props.position}</dd>
        <dt className="card-body gray text-center p-2 lg:px-20">
          {props.quote}
        </dt>
      </div>
    </li>
  );
};

export default EmployeeCard;
