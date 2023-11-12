import React from "react";

function CardBtn() {
  return (
    <section className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:px-16">
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <p className=" text-primary-grey-p font-normal pb-8 text-2xl text-center md:text-left">
              Pen test remote
            </p>
            <p className="text-base text-primary-grey-p">
              An ethical remote attack of the infrastructure, web applications
              and external facing IP addresses.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <p className=" text-primary-grey-p font-normal pb-8 text-2xl text-center md:text-left">
              Pen test remote
            </p>
            <p className="text-base text-primary-grey-p">
              An ethical remote attack of the infrastructure, web applications
              and external facing IP addresses.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-8 mx-4">
          <div className="flex align-center flex-col ">
            <p className=" text-primary-grey-p font-normal pb-8 text-2xl text-center md:text-left">
              Pen test remote
            </p>
            <p className="text-base text-primary-grey-p">
              An ethical remote attack of the infrastructure, web applications
              and external facing IP addresses.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-8 ">
        <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white duration-300 ease-in-out ">
          Book a Pen Test
        </button>
      </div>
    </section>
  );
}

export default CardBtn;
