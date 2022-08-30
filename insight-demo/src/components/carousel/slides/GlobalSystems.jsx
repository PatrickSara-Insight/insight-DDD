import React from "react";
import { Image } from "react-bootstrap";
import gptw from "../../../gptw-no-bg.png";

const GlobalSystems = () => {
  // insert svg graphics to the left of each div.
  return (
    <div className="container mx-auto carousel-slide-cont">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="slide-header">A Global Systems Integrator</h1>
          <h2 className="slide-subheader my-2 ">
            A single team with expertise across all aspects of modern IT
            solutions to architect, manage and execute initiatives from
            end-to-end
          </h2>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-1 sm:gap-4 md:gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <dt className="mt-2">Digital Innovation</dt>
            <dd className="">
              <ul>
                <li>Design Thinking</li>
                <li>UX Design</li>
                <li>Full Stack Development</li>
                <li>Data &#38; AI</li>
                <li>IoT Edge</li>
              </ul>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mt-2">Connected Workforce</dt>
            <dd className="">
              <ul>
                <li>Digital Workplace</li>
                <li>Content &#38; Collaboration</li>
                <li>Enterprise Mobility</li>
                <li>Lab Services</li>
              </ul>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mt-2">Transformation</dt>
            <dd className="">
              <ul>
                <li>Digital Transformation</li>
                <li>Agile Delivery</li>
                <li>Cyber Security</li>
                <li>Data Platforms</li>
              </ul>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mt-2">Advisory</dt>
            <dd className="">
              <ul>
                <li>Strategy</li>
                <li>Architecture</li>
                <li>Coaching</li>
                <li>Training</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default GlobalSystems;
