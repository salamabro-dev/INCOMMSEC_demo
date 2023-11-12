import React from "react";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

function DarkThemeImageCard() {
  return (
    <section className="p-12 bg-[url('/bg-image.jpeg')] bg-cover bg-center">
      <div className="flex justify-center py-12 text-white">
        <h3 className="dark-theme-title text-center">
          Empower employees to become resilient to evolving phishing threats.
        </h3>
      </div>
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:px-4">
        <div className="col-span-1 md:col-span-1 text-white px-8 pb-8">
          <div className="mb-8">
            <p className="text-xl py-4 font-medium">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl py-4 font-medium">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl py-4 font-medium">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 text-white px-8 pb-8 m-auto">
          <Image src={"/broadcast.svg"} height={250} width={250} />
        </div>
      </div>
      <div className="text-center px-8">
        <button className="dark-theme-btn border-transparent py-4 rounded-full text-white px-10 hover:bg-primary-grey-p hover:text-white duration-300 ease-in-out w-full md:w-max group">
          Talk to a consultant
          <EastIcon
            className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
            style={{ color: "#ffff" }}
          />
        </button>
      </div>
    </section>
  );
}

export default DarkThemeImageCard;
