import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

function HowWeWork() {
  return (
    <section className="bg-primary-white-p lg:grid lg:grid-cols-12 ">
      <div className="text-center pt-8 text-primary-blue-p2 lg:grid lg:col-span-full lg:text-center">
        <h2 className="py-2 banner-heading pb-4 mb-8">
          How we will work with you
        </h2>
      </div>
      <div className="grid lg:col-span-8 lg:col-start-3 lg:col-end-8 mx-8 justify-center flex lg:mr-12  ">
        <div className="px-4 mb-8 lg:px-0">
          <div className="flex gap-4">
            <CheckCircleIcon style={{ color: "#00008A" }} />
            <p className="text-primary-grey-p">
              We will have a consultation to understand what is in place, and
              perform an assessment to analyse what can be improved.{" "}
            </p>
          </div>
        </div>
        <div className="px-4 mb-8 lg:px-0">
          <div className="flex gap-4">
            <CheckCircleIcon style={{ color: "#00008A" }} />
            <p className="text-primary-grey-p">
              We will have a consultation to understand what is in place, and
              perform an assessment to analyse what can be improved.{" "}
            </p>
          </div>
        </div>
        <div className="px-4 mb-8 lg:px-0">
          <div className="flex gap-4">
            <CheckCircleIcon style={{ color: "#00008A" }} />
            <p className="text-primary-grey-p">
              We will have a consultation to understand what is in place, and
              perform an assessment to analyse what can be improved.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 hidden lg:grid  pt-[5rem]">
        <Image className="" src="/control-panel.svg" width={300} height={450} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8 md:px-20 flex-wrap md:col-span-12 md:pt-10 ">
        <div className="md:col-span-4 pb-8 ">
          <div className="items-center text-center  md:px-8 lg:px-4">
            <p className="banner-info font-semibold pb-4 text-[52px]"> 81% </p>
            <p className="text-primary-grey-p pb-4 text-lg">
              {" "}
              Of organisations experience malware attacks.{" "}
            </p>
            <p className="text-lg">
              <a
                className="text-primary-grey-p font-medium group hover:text-primary-blue-p"
                href="/"
              >
                Go to Endpoint Protection
                <EastIcon className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </a>
            </p>
          </div>
        </div>
        <div className="md:col-span-4 pb-8 ">
          <div className="items-center text-center  md:px-8 lg:px-4">
            <p className="banner-info font-semibold pb-4 text-[52px]"> 81% </p>
            <p className="text-primary-grey-p pb-4 text-lg">
              {" "}
              Of organisations experience malware attacks.{" "}
            </p>
            <p className="text-lg">
              <a
                className="text-primary-grey-p font-medium group hover:text-primary-blue-p"
                href="/"
              >
                Go to Endpoint Protection
                <EastIcon className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </a>
            </p>
          </div>
        </div>
        <div className="md:col-span-4 pb-8 ">
          <div className="items-center text-center  md:px-8 lg:px-4">
            <p className="banner-info font-semibold pb-4 text-[52px]"> 81% </p>
            <p className="text-primary-grey-p pb-4 text-lg">
              {" "}
              Of organisations experience malware attacks.{" "}
            </p>
            <p className="text-lg">
              <a
                className="text-primary-grey-p font-medium group hover:text-primary-blue-p"
                href="/"
              >
                Go to Endpoint Protection
                <EastIcon className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
