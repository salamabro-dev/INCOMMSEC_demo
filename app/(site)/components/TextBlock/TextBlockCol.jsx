import React from "react";

function TextBlockCol() {
  return (
    <section className="bg-primary-grey-p p-12 ">
      <div className=" md:col-span-3 mb-8 md:my-[5rem]">
        <div className="pb-8 lg:px-[5rem]">
          <h2 className="dark-theme-title-block md:text-center pb-8">
            Why its important
          </h2>

          <p className="text-[#B6B6B6] md:text-center md:px-8">
            Pen testing is a proactive approach to maintaining a strong
            cybersecurity posture and helps to minimise the risks of
            cyberattacks and data breaches.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-8 lg:mx-8">
            <div className="flex align-center flex-col ">
              <p className=" text-primary-white-p3 font-normal pb-4 text-2xl md:text-left">
                Cost savings
              </p>
              <p className="text-base text-primary-white-p3 ">
                Detect and fix vulnerabilities within your network before they
                are exploited. Save costs from breaches, data loss, fines and
                damage to reputation.
              </p>
            </div>
          </div>
          <div className="py-8 lg:mx-8">
            <div className="flex align-center flex-col ">
              <p className=" text-primary-white-p3 font-normal pb-4 text-2xl md:text-left">
                User Awareness
              </p>
              <p className="text-base text-primary-white-p3 ">
                Empower users to spot social engineering and potential
                cyberthreats.
              </p>
            </div>
          </div>
          <div className=" py-8 lg:mx-8">
            <div className="flex align-center flex-col ">
              <p className=" text-primary-white-p3 font-normal pb-4 text-2xl md:text-left">
                Strengthen Defence
              </p>
              <p className="text-base text-primary-white-p3 ">
                Regular Pen Tests help understand how effective your security
                system is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextBlockCol;
