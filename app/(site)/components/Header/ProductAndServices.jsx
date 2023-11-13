"use client";
import { React, useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

function ProductAndServices({ disableScroll }) {
  const [isHover, setIsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [hoverMenu, setHoverMeny] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = () => {
    setShowModal(true);
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  const handleCloseMenu = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    setShowModal(false);
  };

  return (
    <>
      <div className="hidden lg:flex items-center ">
        <div>
          <button
            className="py-4 pr-8 text-primary-grey-p group hover:text-primary-blue-p hover:underline decoration-2 underline-offset-8 flex items-center relative ${showModal ? 'modal-open' : 'bg-red-500'}`}"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleProductClick}
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

      {showModal && (
        <div className="modal-overlay hidden lg:block">
          <div class="absolute top-[17rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container mx-auto mt-8 p-4 bg-white rounded-3xl shadow-md ">
            <span className="flex justify-end cursor-pointer">
              <CloseIcon onClick={handleCloseMenu} />
            </span>
            <div class="text-center  text-primary-dark-p my-4 ">
              <p className="text-2xl font-normal archivo ">
                Custom EndPoint Security solutions
              </p>
            </div>
            <div>
              <div class="grid grid-cols-3 gap-4 mb-12">
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Endpoint protection
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Employee monitoring
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral ">
                  Email security
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Pen testing and vulnerability scans
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Security Operations Centre as a Service
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Disaster recovery
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Phishing risk management and training
                </div>
                <div class="flex-1 p-4 text-primary-grey-neutral">
                  Accreditations
                </div>
              </div>
              <div className="mx-20 mt-8 p-2 bg-white rounded-3xl shadow-md bg-white shadow-lg shadow-gray-100">
                <div className="text-center">
                  <p class="font-normal archivo text-2xl pb-4 ">Price plans</p>
                  <p className="text-primary-grey-p font-light pb-4">
                    We tailor each service to the needs of the customer. For
                    pricing, get in touch for a free consultation.
                  </p>
                  <p className="font-medium">
                    <a href="" className="group">
                      Get in touch
                      <EastIcon className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductAndServices;
