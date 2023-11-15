import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function DarkThemeCard() {
  return (
    <section className="p-12  bg-[url('/bg-image.jpeg')] bg-cover bg-bottom">
      <div className="text-center pb-10 lg:py-20">
        <h2 className="dark-theme-heading-two">How we will work with you</h2>
      </div>
      <div className="text-[#fefefe] grid-cols-1 lg:grid-cols-4 grid gap-8 mb-8 lg:pl-20">
        <div className="flex flex-col gap-2 px-8">
          <h3 className="text-xl lg:text-2xl">Scoping</h3>
          <p>
            We will work with you to understand what your requirements are.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2 px-8">
          <h3 className="text-xl lg:text-2xl">Create a timescale</h3>
          <p>We will establish a timeline for delivery.</p>
        </div>
        <div className="flex flex-col gap-2 px-8">
          <h3 className="text-xl lg:text-2xl">Delivery</h3>
          <p>We will action the agreed objectives.</p>
        </div>
        <div className="flex flex-col gap-2 px-8">
          <h3 className="text-xl lg:text-2xl">Reporting</h3>
          <p>
            We will create a detailed report illustrating any vulnerabilities we
            found.
          </p>
        </div>
      </div>
      <div className="text-center py-8">
        <a
          className="text-primary-white-p flex justify-center items-center group"
          href="http://"
        >
          Talk to a consultant
          <FaArrowRightLong
            className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
            style={{ color: "#f5f5f5" }}
            size={24}
          />
        </a>
      </div>
    </section>
  );
}

export default DarkThemeCard;
