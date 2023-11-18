import React from "react";
import Image from "next/image";
import { getBanners, urlFor } from "../../../sanity/sanity-utils";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function page() {
  const banners = await getBanners();
  const firstBanner = banners[0]; // Get the first banner

  return (
    <section
      key={firstBanner._id}
      className="bg-primary-white-p px-4 pb-8 pt-[50px] lg:pt-[100px]"
    >
      <div className="text-center pt-8 text-primary-blue-p2">
        <p className="py-2 text-2xl">{firstBanner.sectionTitle}</p>
        <div className="py-4">
          <h1 className="title banner-heading tracking-[3.68px] font-extrabold pb-2">
            {firstBanner.bannerHeading}
          </h1>
          <div className={`flex justify-center gap-x-2 items-center`}>
            {firstBanner.image && (
              <Image
                src={urlFor(firstBanner.image).url()}
                alt={firstBanner.image.alt}
                className={`lock lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px]`}
                unoptimized={true}
                height={57}
                width={57}
              />
            )}
            <h1 className="banner-info font-extralight tracking-[6px] md:tracking-[11px]">
              {firstBanner.bannerSubheading}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href={firstBanner.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center my-4 group">
              {firstBanner.buttonText}
              <FaArrowRightLong
                size={24}
                className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
              />
            </button>
          </a>
        </div>
        <div className="banner-text py-4 text-center px-0 md:px-[12rem] lg:px-[15rem]">
          <p className="md:text-xl landing-description">
            {firstBanner.bannerText}
          </p>
        </div>
      </div>
    </section>
  );
}
