import React from "react";

const Culture = () => {
  return (
    <div className="container mx-auto carousel-slide-cont">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="slide-header">Our success starts with our culture.</h1>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 ">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 leading-6 slide-body">
              We are change agents, united in our passion to improve every day
              and deliver outstanding results for our clients, partners and
              Insight.
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              Hunger
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              We are teammates. We take care of each other, our clients and our
              communities.
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">Heart</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              We are a team of diverse individuals who value inclusivity and
              create meaningful connections so we can win together.
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              Harmony
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Culture;
