import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import Logo from "../../LogoTrimmed.png";
import Hunger from "../../hunger.png";
import { Container, Image } from "react-bootstrap";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <Image
        className="showcase-logo gray"
        fluid
        alt="insight logo"
        src={Logo}
      />
      <div className="container md:mx-8 lg:mx-20 xl:mx-40">
        <h2 className="slide-subheader italic gray">
          noun [mass noun] - The capacity to gain an accurate and deep
          understanding of someone or something.
        </h2>
      </div>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* hunger heart harmony card */}
        {/* <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div class="flex flex-1 flex-col p-8">
            <Image class="mx-auto h-32 w-32 rounded-full" src={Hunger} alt="" />
            <h3 class="mt-6 card-body">Hunger</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
              <dd class="text-sm text-gray-500">
                We are change agents, united in our passion to improve every day
                and deliver outstanding results for our clients, partners and
                Insight.
              </dd>
            </dl>
          </div>
        </li> */}

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div class="flex flex-1 flex-col p-8">
            {/* <Image class="mx-auto h-32 w-32 rounded-full" src={Hunger} alt="" /> */}
            <h3 class="mt-6 card-body">We deliver.</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div class="flex flex-1 flex-col p-8">
            <Image class="mx-auto h-32 w-32 rounded-full" src={Hunger} alt="" />
            <h3 class="mt-6 card-body">We integrate.</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div class="flex flex-1 flex-col p-8">
            <Image class="mx-auto h-32 w-32 rounded-full" src={Hunger} alt="" />
            <h3 class="mt-6 card-body">We connect.</h3>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Showcase;
