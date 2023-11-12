import React from "react";
import Image from "next/image";

function ListImage() {
  return (
    <section className="p-12">
      <div className="text-center pb-12">
        <h2 className="text-[#434343]">Create a security-savvy workforce</h2>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-12 items-center mb-16">
          <div className="mb-8">
            <div className="list-container-image ">
              <div className="lg:py-4 lg:px-12 ">
                <p className="list-title text-xl md:text-2xl pb-4 lg:pl-0">
                  Reduce human error
                </p>
                <div className="relative">
                  <div className="list-container-image-mobile pl-8 lg:pl-0">
                    <p className="text-lg text-primary-grey-p">
                      Educate staff on how to avoid common mishaps like sending
                      sensitive data to the wrong person.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image src={"/pen.svg"} height={250} width={250} />
          </div>
        </div>
      </div>

      <div className="text-center my-8 ">
        <button className="py-4 border rounded-full border-primary-blue-p text-primary-blue-p px-10 bg-white hover:bg-primary-grey-p hover:text-white duration-300 ease-in-out ">
          Talk to a consultant
        </button>
      </div>
    </section>
  );
}

export default ListImage;
