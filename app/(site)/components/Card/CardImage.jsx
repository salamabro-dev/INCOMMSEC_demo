import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function CardImage() {
  return (
    <section className="p-12">
      <div className="text-center mb-8">
        <h2 className="text-primary-blue-p2 pb-2">
          Find and remediate vulnerabilities
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-12">
        <div className="lg:mx-8">
          <div className=" pb-12">
            <p className="text-primary-grey-p text-2xl archivo pb-8 text-center lg:text-left font-normal">
              Vulnerability scan
            </p>
            <p className="pb-8">
              We scan internal or external facing IP addresses of the
              organisation to the point of identifying a vulnerability.{" "}
            </p>
            <div className="flex justify-center  lg:justify-end py-2">
              <a
                className="flex items-center  group hover:gradient-text text-primary-grey-p"
                href="/"
              >
                <span className="font-medium">Find out how we can help </span>
                <FaArrowRightLong
                  className=" text-primary-grey-p ml-2 transform group-hover:text-blue-900 group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={"/pen.svg"} height={250} width={250} />
        </div>
      </div>
    </section>
  );
}

export default CardImage;
