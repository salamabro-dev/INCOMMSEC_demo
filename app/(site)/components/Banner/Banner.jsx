import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IconContext } from "react-icons";

export default function Banner() {
  return (
    <section className="bg-white z-0 relative">
      <div className="text-center pt-8 text-primary-blue-p2 px-10">
        <p className="py-2">We are a vendor neutral consultant making</p>
        <div className="py-4">
          <h1 className="tracking-[3.68px] font-extrabold">CYBERSECURITY</h1>
          <h1 className="font-extralight">simple.</h1>
        </div>
        <div className="py-4 px-20">
          <p>
            We help business owners and IT managers protect their Networks, IP
            and Data through innovative and proven software and services.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full my-2 py-4 px-10 bg-primary-blue-p text-white flex items-center">
            Talk to a consultant
            <ImArrowRight2 className="ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
