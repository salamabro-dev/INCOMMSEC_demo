import React from "react";
import Image from "next/image";
import { getPricing, urlFor } from "../../../../sanity/sanity-utils";

export default async function Pricing() {
  const pricing = await getPricing();
  return (
    <>
      {pricing.map((price) => (
        <section
          key={price._id}
          className="grid bg-white px-8 pb-16  md:grid md:grid-cols-12 "
        >
          <div className="col-span-full flex justify-center tracking-[3px] text-primary-grey-p py-8 lg:py-12 text-center px-4 ">
            <h2>{price.title}</h2>
          </div>
          <div className="grid md:col-span-8 lg:col-start-3 lg:col-end-8 justify-center flex  ">
            <div className="px-4 mb-8 lg:px-0">
              <div className="flex gap-8 flex-col lg:mb-0 mb-4">
                <p className="banner-heading md:text-2xl text-xl ">
                  {price.heading}
                </p>
                <p className="text-primary-grey-p md:text-lg">
                  {price.description}
                </p>
                <div className="text-center ">
                  <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white duration-300 ease-in-out ">
                    {price.btnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:grid flex justify-center">
            <Image
              className="h-[300px] w-[300px] "
              src={urlFor(price.image).url()}
              width={300}
              height={300}
              alt={price.image.alt}
            />
          </div>
        </section>
      ))}
    </>
  );
}
