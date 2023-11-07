import React from "react";

function DarkThemeBanner() {
  return (
    <section className="bg-primary-dark-p pt-[80px] lg:pt-[100px]">
      <div className="px-12 py-8 md:px-[8rem] md:py-[8rem]">
        <div className="text-center flex justify-center my-4">
          <h1 className="dark-theme-heading-one">ENDPOINT PROTECTION</h1>
        </div>
        <div className="md:mx-16  ">
          <div className="flex md:justify-center text-center">
            <p className="text-secondary-light-grey md:px-8">
              Protect all devices on your network from malware, viruses and
              cyberattacks. We will work with our suppliers to tailor the
              solution to your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DarkThemeBanner;
