import React from "react";

const MicrosoftCard = (props) => {
  return (
    <div className="rounded-md shadow flex justify-center items-center bg-white microsoft-card microsoft">
      <dt className="text-center microsoft-card-title microsoft-body">
        {props.desc}
      </dt>
    </div>
  );
};

export default MicrosoftCard;
