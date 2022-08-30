import React from "react";
import { Image } from "react-bootstrap";
import gptw from "../../../gptw-no-bg.png";

const GPTW = () => {
  // insert svg graphics to the left of each div.
  return (
    <div className="container mx-auto carousel-slide-cont">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="gptw-logo"
            alt="great place to work award"
            src={gptw}
          />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="slide-subheader my-2 ">
              Australia Best Places To Work 2022
            </h2>
            <h1 className="slide-header">No. 16</h1>
          </div>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-1 sm:gap-4 md:gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 leading-6 slide-body">
              FORTUNE 500 Company
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              No. 360
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Fortune World's Most Admired Cmpanies
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">2021</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              2nd Most Gender Diverse Executive Team in Technology
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              The Org
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Human Rights Campaign Foundation's 2021
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              95/100
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              LGBTQ Workplace Equality
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              100/100
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Reconciliation Australia: Reflect Reconciliation Action Plan
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">2022</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Partnership with the Indigenous Literacy Foundation
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">2022</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Microsoft Gold Partner
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">2022</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default GPTW;
