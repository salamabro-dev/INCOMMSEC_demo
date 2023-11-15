import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  return (
    <section className="p-12">
      <div className="text-center mb-8">
        <h2 className="banner-heading pb-2 ">Dependable resilience</h2>
        <p className="text-primary-grey-p">
          Combat novel forms of malware with advanced machine learning.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <div className="mx-auto pb-4">
              <Image width={100} height={100} src={"./broadcast.svg"} />
            </div>
            <p className="text-xl text-primary-grey-p font-normal pb-2">
              Offline protection
            </p>
            <p className="text-base text-primary-grey-p">
              Stops attacks when the endpoint is offline.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <div className="mx-auto pb-4">
              <Image width={100} height={100} src={"./broadcast.svg"} />
            </div>
            <p className="text-xl text-primary-grey-p font-normal pb-2">
              Offline protection
            </p>
            <p className="text-base text-primary-grey-p">
              Identifying suspicious activity typical of malware. With powerful
              heuristic settings adjust by you.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <div className="mx-auto pb-4">
              <Image width={100} height={100} src={"./broadcast.svg"} />
            </div>
            <p className="text-xl text-primary-grey-p font-normal pb-2">
              Offline protection
            </p>
            <p className="text-base text-primary-grey-p">
              See how long any infection on any endpoint has been on your
              network prior to automatic remediation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-4">
        <a
          className="text-primary-grey-p md:ml-auto group hover:gradient-text flex items-center"
          href=""
        >
          <span className="font-medium">Find out how we can help</span>
          <FaArrowRightLong
            className="ml-2 transform text-primary-grey-p group-hover:text-blue-900 group-hover:translate-x-2 transition-transform duration-300 ease-in-out "
            fontSize="medium"
            size={24}
          />
        </a>
      </div>
    </section>
  );
}

export default Card;
