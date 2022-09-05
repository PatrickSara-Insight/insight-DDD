import React from "react";

const EmployeeCard = (props) => {
  return (
    <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <div class="flex flex-1 flex-col p-8">
        <img
          class="mx-auto my-16 h-64 w-64 flex-shrink-0 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />

        <h3 class="mt-6 card-title font-bold gray">{props.name}</h3>
        <dd class="mt-1 card-title gray">{props.position}</dd>
        <dt className="card-body gray text-center p-20">{props.quote}</dt>
      </div>
    </li>
  );
};

export default EmployeeCard;
