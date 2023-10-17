import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

function Form() {
  return (
    <section className="grid bg-primary-dark-p pt-8 px-8 pb-16 ">
      <div className="text-center pb-8">
        <h2 className="text-white pb-4">Talk to a consultant</h2>
        <p className="text-primary-grey-neutral-p2 ">
          We will talk through solutions and recommend the right service plan.
        </p>
      </div>
      <div className="grid-cols-12 flex flex-col lg:grid lg:mx-20">
        <div className="lg:col-span-6">
          <form className="flex flex-col gap-y-8 pb-20">
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary-grey-neutral-p2 pb-2">Email</label>
              <input
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2"
                type="text"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary-grey-neutral-p2 pb-2">
                Solution you want to learn about
              </label>
              <textarea
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2"
                name="message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center justify-center w-full"
                type="submit"
              >
                Submit
                <ArrowForwardIcon
                  className="ml-2"
                  style={{ color: "#ffff" }}
                  fontSize="large"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-6 lg:ml-[5rem] flex justify-center">
          <Image
            className="w-[350px] lg:w-[500px] lg:h-[330px]"
            src="/form-banner.svg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Form;
