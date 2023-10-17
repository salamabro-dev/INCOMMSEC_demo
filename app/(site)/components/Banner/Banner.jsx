"use client";
import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IconContext } from "react-icons";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-primary-white-p px-4 pb-8">
      <div className="text-center pt-8 text-primary-blue-p2">
        <p className="py-2 text-2xl">
          We are a vendor neutral consultant making
        </p>
        <div className="py-4">
          <h1 className="banner-heading tracking-[3.68px] font-extrabold">
            CYBERSECURITY
          </h1>
          <div className={`flex justify-center gap-x-2 items-center`}>
            <Image
              src="/Lock.png"
              className={`lock lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px]`}
              unoptimized={true}
              height={57}
              width={57}
            />
            <h1 className="banner-info font-extralight tracking-[6px] md:tracking-[11px]">
              simple.
            </h1>
          </div>
        </div>
        <div className="banner-text py-4 px-10">
          <p>
            We help business owners and IT managers protect their Networks, IP
            and Data <br></br> through innovative and proven software and
            services.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center">
            Talk to a consultant
            <ImArrowRight2 className="ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
