import React from "react";
import Image from "next/image";

function HowWeWork() {
  return (
    <section className="bg-primary-white-p grid grid-cols-12 ">
      <div className="text-center pt-8 text-primary-blue-p2 col-span-full">
        <h2 className="py-2 banner-heading pb-4">How we will work with you</h2>
      </div>
      <div className="col-span-8">
        <div className="mx-2 flex justify-center lg:col-span-8 ">
          <div className="image-container object-cover mb-8"></div>
          {/* <div className="relative">
          <ul className="flex flex-col mx-[8rem] top-[-30rem] absolute text-white gap-y-8">
            <li className="">
              {" "}
              We will have a consultation to understand what is in place, and
              perform an assessment to analyse what can be improved.
            </li>
            <li className="">
              {" "}
              We will recommend solutions from our selected vendors to help
              mitigate risk and strengthen your cyber architecture
            </li>
            <li className=""> Provide instant access to the services.</li>
          </ul>
        </div> */}
        </div>
      </div>
      <div className="col-span-4"></div>
    </section>
  );
}

export default HowWeWork;
