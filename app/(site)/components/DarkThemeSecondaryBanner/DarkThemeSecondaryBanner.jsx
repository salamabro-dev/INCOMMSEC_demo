import React from "react";
import EastIcon from "@mui/icons-material/East";

function DarkThemeSecondaryBanner() {
  return (
    <>
      <section className="p-12 bg-[url('/bg-image.jpeg')] bg-cover bg-center">
        <div className="flex justify-center py-12 text-white">
          <h3 className="dark-theme-title text-center">
            Agent based software with a distributed cloud architecture
            delivering advanced threat protection.
          </h3>
        </div>
        <div className=" py-12 flex flex-col flex-wrap md:flex-row md:px-4">
          <div className="flex flex-col text-white px-8 pb-8 w-full md:w-1/3 ">
            <p className="text-xl py-4">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
          <div className="flex flex-col text-white px-8 pb-8 w-full md:w-1/3 ">
            <p className="text-xl py-4">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
          <div className="flex flex-col text-white px-8 pb-8 w-full md:w-1/3">
            <p className="text-xl py-4">Fast deployment</p>
            <p className="text-primary-white-p3">
              Deploy the solution to all endpoints across the network from a
              single device.
            </p>
          </div>
        </div>
        <div className="text-center px-8 py-8 ">
          <button className="dark-theme-btn border-transparent py-4 rounded-full text-white px-10 w-full md:w-max group">
            Talk to a consultant
            <EastIcon
              className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out "
              style={{ color: "#ffff" }}
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default DarkThemeSecondaryBanner;
