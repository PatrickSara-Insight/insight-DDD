import React from "react";

const EmployeeCard = (props) => {
  return (
    <li className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow employee-card employee">
      <img
        className="mx-auto h-16 w-16 md:h-32 md:w-32 xl:h-64 xl:w-64 flex-shrink-0 rounded-full"
        src={props.src}
        alt=""
      />
      <div className="flex flex-col justify-start items-center">
        <h3 className="mt-2 card-title font-bold gray">{props.name}</h3>
        <dd className="mt-1 card-body gray">{props.position}</dd>
        <dt className="card-body gray text-center mt-2">{props.quote}</dt>
      </div>
    </li>
  );
};

export default EmployeeCard;
