import React from "react";

const MicrosoftCard = (props) => {
  return (
    <div className="rounded-lg bg-white shadow microsoft-card microsoft p-10">
      <dt className="microsoft-body mb-4">{props.desc}</dt>
    </div>
  );
};

export default MicrosoftCard;
