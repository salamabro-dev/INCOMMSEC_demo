import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { getHowWeWork, urlFor } from "../../../../sanity/sanity-utils";

export default async function HowWeWork() {
  const howWeWork = await getHowWeWork();
  return (
    <>
      {howWeWork.map((info, stats) => (
        <section
          className="bg-primary-white-p lg:grid lg:grid-cols-12 "
          key={info._id}
        >
          <div className="text-center pt-8 text-primary-blue-p2 lg:grid lg:col-span-full lg:text-center">
            <h2 className="py-2 banner-heading pb-4 mb-8">{info.title}</h2>
          </div>

          <ul className="grid lg:col-span-8 lg:col-start-3 lg:col-end-8 mx-8 justify-center flex lg:mr-12  ">
            {info.items.map((item) => (
              <li className="px-4 mb-8 lg:px-0" key={item._id}>
                <div className="flex gap-4">
                  <IoCheckmarkCircleSharp
                    style={{ color: "#00008A" }}
                    size={24}
                  />
                  <p className="text-primary-grey-p">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-4 hidden lg:grid  pt-[5rem]">
            <Image
              className=""
              src={urlFor(info.image).url()}
              alt={info.image.alt}
              width={300}
              height={450}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8 md:px-20 flex-wrap md:col-span-12 md:pt-10 ">
            {info.stats.map((stat) => (
              <div className="md:col-span-4 mx-8 mb-12" key={stat._id}>
                <div className="items-center text-center md:flex md:flex-col  md:px-8 lg:px-4 h-full ">
                  <p className="banner-info font-semibold pb-4 text-[52px]">
                    {stat.title}
                  </p>
                  <p className="text-primary-grey-p pb-4 text-lg">
                    {stat.subheading}
                  </p>
                  <p className="text-lg pt-4 mt-auto">
                    <a
                      className="flex items-center justify-center text-primary-grey-p font-medium group hover:text-primary-blue-p cursor-pointer"
                      href={stats.link}
                    >
                      {stat.linkText}
                      <FaArrowRightLong
                        size={24}
                        className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
                      />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
