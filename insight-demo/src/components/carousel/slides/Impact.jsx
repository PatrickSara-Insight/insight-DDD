import React from "react";

const Impact = () => {
  // insert svg graphics to the left of each div.
  return (
    <div className="container mx-auto carousel-slide-cont">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="slide-subheader my-2 ">
            See how we're making a positive impact
          </h2>
          <h1 className="slide-header">
            Local presence, global reach, since 1988
          </h1>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 ">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 leading-6 slide-body">
              teammates worldwide
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              12,000 +
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              countries with insight operations
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">21</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              technical resources
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              5000 +
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Impact;
