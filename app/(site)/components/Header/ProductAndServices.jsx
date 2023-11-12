"use client";
import { React, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProductAndServices() {
  const [isHover, setIsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <>
      <div className="hidden lg:flex items-center ">
        <div>
          <button
            className="py-4 pr-8 text-primary-grey-p group hover:text-primary-blue-p hover:underline decoration-2 underline-offset-8 flex items-center relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <p
              className={`transition-transform duration-300 ${
                isHover ? "transform -translate-y-1" : ""
              }`}
            >
              Product and services
            </p>
            {isHover ? (
              <KeyboardArrowUpIcon
                style={{ color: "##00008A" }}
                fontSize="large"
              />
            ) : (
              <KeyboardArrowDownIcon
                style={{ color: "##00008A" }}
                fontSize="large"
                className="transition-transform duration-300 ease-in-out"
              />
            )}
          </button>
        </div>
        <div className="">
          <a
            href="./contact-us"
            className="py-6 text-primary-grey-p hover:text-primary-blue-p hover:underline decoration-2 underline-offset-8"
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            <p
              className={`transition-transform duration-300 ${
                contactHover ? "transform -translate-y-1" : ""
              }`}
            >
              Contact us
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductAndServices;
