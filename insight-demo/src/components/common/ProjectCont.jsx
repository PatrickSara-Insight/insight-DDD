import React from "react";
import { Image } from "react-bootstrap";

const ProjectCont = (props) => {
  return (
    <div className="flex flex-col justify-start items-center public-sector m-0 lg:my-10">
      <h3 className="project-card-title text-center font-bold mb-4">
        {props.title}
      </h3>
      <Image
        fluid
        alt={`${props.title} logo's`}
        src={props.src}
        className="projects-img"
      />
    </div>
  );
};

export default ProjectCont;
