import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import Image from "next/image";
import { getBanners, urlFor } from "../../../../sanity/sanity-utils";

export default async function Banner() {
  const banners = await getBanners();
  return (
    <section className="bg-primary-white-p px-4 pb-8">
      {banners.map((banner) => (
        <div key={banner._id} className="text-center pt-8 text-primary-blue-p2">
          <p className="py-2 text-2xl">{banner.sectionTitle}</p>
          <div className="py-4">
            <h1 className="title banner-heading tracking-[3.68px] font-extrabold pb-2">
              {banner.bannerHeading}
            </h1>
            <div className={`flex justify-center gap-x-2 items-center`}>
              {banner.image && (
                <Image
                  src={urlFor(banner.image).url()}
                  alt={banner.image.alt}
                  className={`lock lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px]`}
                  unoptimized={true}
                  height={57}
                  width={57}
                />
              )}
              <h1 className="banner-info font-extralight tracking-[6px] md:tracking-[11px]">
                {banner.bannerSubheading}
              </h1>
            </div>
          </div>
          <div className="banner-text py-4 text-center px-0 md:px-[12rem] lg:px-[15rem]">
            <p className="md:text-xl">{banner.bannerText}</p>
          </div>
          <div className="flex justify-center">
            <a
              href={banner.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center my-4 group">
                {banner.buttonText}
                <ImArrowRight2 className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
