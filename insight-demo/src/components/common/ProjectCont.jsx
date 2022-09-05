import React from "react";
import { Image } from "react-bootstrap";

const ProjectCont = (props) => {
  return (
    <div className="flex flex-col justify-start items-center public-sector my-10">
      <h3 className="project-card-title text-center font-bold mb-4">
        {props.title}
      </h3>
      <Image fluid alt="" src={props.src} className="projects-img" />
    </div>
  );
};

export default ProjectCont;
