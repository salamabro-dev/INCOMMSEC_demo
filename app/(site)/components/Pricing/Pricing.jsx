import React from "react";
import Image from "next/image";

function Pricing() {
  return (
    <section className="grid bg-primary-white-p px-8 pb-16  md:grid md:grid-cols-12 ">
      <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-8 lg:py-12 text-center px-4 ">
        <h2>Pricing</h2>
      </div>
      <div className="grid md:col-span-8 lg:col-start-3 lg:col-end-8 justify-center flex  ">
        <div className="px-4 mb-8 lg:px-0">
          <div className="flex gap-8 flex-col lg:mb-0 mb-4">
            <p className="banner-heading md:text-2xl text-xl ">
              Only pay what you need.
            </p>
            <p className="text-primary-grey-p md:text-lg">
              We provide tailor made plans, so you only pay for what you need.
            </p>
            <p className="text-primary-grey-p md:text-lg ">
              Get a quote today by chatting to our experts at no extra cost.
            </p>
            <div className="text-center ">
              <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white ">
                Request a quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 md:grid flex justify-center">
        <Image className="" src="/pricing.svg" width={300} height={300} />
      </div>

      {/* <div className="px-4 md:px-8 lg:px-20 mx-4 inline-flex items-center justify-center">
        <div className="p-[3rem] flex flex-col">
          <div className="text-center text-primary-grey-neutral">
            <p className=" pb-8">
              We provide tailor made plans, so you only pay for what you need.
            </p>
            <p className=" pb-8">
              Get a quote today by chatting to our experts at no extra cost.
            </p>
          </div>
          <div className="text-center ">
            <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white ">
              Request a quote
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Pricing;
