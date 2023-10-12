import React from "react";
import Image from "next/image";

function HowWeWork() {
  return (
    <section className="bg-primary-white-p">
      <div className="text-center pt-8 text-primary-blue-p2">
        <h2 className="py-2 banner-heading pb-4">How we will work with you</h2>
      </div>
      <div className="lg:grid lg:grid-cols-12">
        <div className="mx-2 flex justify-center lg:col-span-8 ">
          <div class="image-container object-cover mb-8">
            <Image
              src="/laptop.png"
              width={350}
              height={100}
              unoptimized={true}
              className="brightness-50"
            />
          </div>
        </div>
        <div className="relative">
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
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
