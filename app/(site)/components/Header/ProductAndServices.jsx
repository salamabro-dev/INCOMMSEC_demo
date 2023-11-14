"use client";
import { React, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

function ProductAndServices() {
  const [isHover, setIsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleProductClick = () => {
    setShowModal(!showModal);
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    // Reset the clicked state when closing the modal
    setIsClicked(false);
  };

  const handleCloseMenu = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    setShowModal(false);
  };

  const handleClick = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    setIsClicked(true);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="hidden lg:flex items-center ">
        <div>
          <button
            className="gap-1 py-4 pr-8 text-primary-grey-p group hover:text-primary-blue-p hover:underline decoration-2 underline-offset-8 flex items-center relative"
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
              <FaChevronUp style={{ color: "##00008A" }} size={24} />
            ) : (
              <FaChevronDown
                style={{ color: "##00008A" }}
                size={24}
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
        <div className="modal-overlay hidden lg:block modal-container">
          <div className="absolute top-[20rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container mx-auto mt-8 p-4 bg-white rounded-3xl shadow-md">
            <div className="flex justify-end cursor-pointer">
              <button className="" onClick={handleCloseMenu}>
                <MdClose className="text-primary-grey-p" size={24} />
              </button>
            </div>
            <div className="text-center text-primary-dark-p my-4">
              <p className="text-2xl font-normal archivo text-primary-blue-p">
                Custom EndPoint Security solutions
              </p>
            </div>
            <div className="pl-[84px]">
              <div className="mx-auto grid grid-cols-3 gap-4 mb-12">
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light text-xl">
                    <Link
                      href="/end-point-protection"
                      className="flex gap-1 items-center group min-w-fit hover:text-blue-900  "
                      onClick={handleClick}
                    >
                      <EastIcon
                        injectFirst
                        className=" hidden group-hover:flex transition duration-300 ease-in group-hover:text-blue-900  "
                      />
                      Endpoint protection
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className="hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Employee monitoring
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className=" flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className="hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Email security
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className="hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Pen testing and vulnerability scans
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className=" hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Security Operations Centre as a Service
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className="hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Disaster recovery
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className=" hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Phishing risk management and training
                    </Link>
                  </p>
                </div>
                <div className="p-4 text-primary-grey-neutral">
                  <p className="font-light">
                    <Link
                      href="#"
                      className="flex gap-1 items-center group min-w-fit "
                      onClick={handleClick}
                    >
                      <EastIcon
                        className="hidden group-hover:inline transition duration-300 ease-in  "
                        fontSize="small"
                      />
                      Accreditations
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <Link href="/contact-us">
              <button
                className={`modal-box mx-[20rem] p-8 mb-8 p-2 rounded-3xl shadow-lg shadow-gray-100 border group ${
                  isClicked ? "bg-[#F5F5F5]" : "bg-white"
                }`}
                onClick={() => {
                  handleClick();
                  handleCloseMenu(); // Close the modal after clicking the link
                }}
              >
                <div className="text-center">
                  <p className="modal-box-title font-normal archivo text-2xl pb-4 group-hover:text-blue-950">
                    Price plans
                  </p>
                  <p className="text-primary-grey-p font-light pb-4">
                    We tailor each service to the needs of the customer. For
                    pricing, get in touch for a free consultation.
                  </p>
                  <p className="font-medium">
                    <a
                      href=""
                      className="group modal-box-icon group-hover:text-blue-950 "
                    >
                      Get in touch
                      <EastIcon className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
                    </a>
                  </p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductAndServices;
