import React from "react";

const Stats = () => {
  return (
    <div className="container mx-auto carousel-slide-cont">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h1 className="text-3xl tracking-tight slide-header">
            Global Integration
          </h1> */}
          {/* <h2 className="mt-3 text-xl slide-subheader">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </h2> */}
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Fortune 500 company founded
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">1988</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Countries operating in
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">21</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Insight teammates worldwide
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">
              12,000
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Architects, developers and engineers globally
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">5,000</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 leading-6 slide-body">
              Consultants in Australia &#38; NZ
            </dt>
            <dd className="order-1 tracking-tight slide-stat-primary">270+</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
