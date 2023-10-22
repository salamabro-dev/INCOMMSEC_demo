import React from "react";

function Pricing() {
  return (
    <section className="grid bg-primary-white-p px-8 pb-16 ">
      <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-12 text-center px-4 ">
        <h2>Pricing</h2>
      </div>

      <div className="px-4 md:px-8 lg:px-20 mx-4 inline-flex items-center justify-center">
        <div className="border rounded-[50px] p-[3rem] bg-white box-shadow-card flex flex-col">
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
      </div>
    </section>
  );
}

export default Pricing;
