import React from "react";

const MicrosoftCard = (props) => {
  return (
    <div className="p-10 rounded-md shadow flex justify-center items-center bg-white microsoft-card microsoft">
      <dt className="text-center industry-card-title microsoft-body">
        {props.desc}
      </dt>
    </div>
  );
};

export default MicrosoftCard;
