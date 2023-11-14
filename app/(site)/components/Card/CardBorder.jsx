import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

export default function CardBorder() {
  return (
    <section className="py-12 flex flex-col items-center">
      <div className="mb-8 lg:mb-16 px-12">
        <h2 className="banner-heading pb-2 tracking-[3px] text-center pb-4">
          24/7/365 security monitoring
        </h2>
        <p className="text-primary-grey-p text-center text-lg">
          Diligent analysis of security threats by well-trained and experienced
          professionals, industry-leading software, machine learning, and AI.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mx-12 items-center gap-8 lg:my-12 mb-16">
        <div className="mb-8 border rounded-[2.5rem] bg-white shadow-lg flex-1 lg:mx-[8rem] lg:order-1">
          <div className="py-8 px-12">
            <p className="text-xl md:text-2xl pb-8 lg:pl-0 text-primary-grey-p font-normal">
              Fraction of the cost of building it yourself
            </p>
            <div className="lg:pl-0 pb-12">
              <p className="text-lg text-primary-grey-p">
                We price the service per user. So that you dont have to invest
                in hardware, infrastructure, people, training, licensing, and
                management.
              </p>
            </div>
            <div className="flex justify-center md:justify-end lg:pt-8">
              <a
                className="text-primary-grey-p  group hover:gradient-text"
                href="/"
              >
                <span className="font-medium">Get a quote</span>
                <EastIcon
                  className="ml-2 transform text-primary-grey-p group-hover:text-blue-900 group-hover:translate-x-2 transition-transform duration-300 ease-in-out "
                  fontSize="medium"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-1 lg:order-2 justify-center ">
          <Image src={"/discount.svg"} height={350} width={350} alt="" />
        </div>
      </div>
    </section>
  );
}
