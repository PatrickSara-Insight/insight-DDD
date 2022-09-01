import React from "react";

const ValueCard = (props) => {
  return (
    <li class="col-span-1 flex flex-col rounded-lg bg-white text-center shadow culture-card culture">
      <div class="flex flex-1 flex-col p-8">
        <h3 class="mt-6 card-title">{props.title}</h3>
        <dl class="mt-1 flex flex-grow flex-col justify-between">
          <dd class="card-body">{props.desc}</dd>
        </dl>
      </div>
    </li>
  );
};

export default ValueCard;
