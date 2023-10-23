"use client";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

function FormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Data", name, email, message);

    try {
      console.log(name);
      const res = await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("Err", err);
    }
  };

  return submitted ? (
    <div className="grid-cols-12 flex flex-col lg:grid lg:mx-20">
      <div className="lg:col-span-6 ">
        <form className="" onSubmit={onSubmit}>
          <fieldset className="flex flex-col gap-y-8 pb-20">
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="message"
              >
                Solution you want to learn about
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                name="message"
              ></textarea>
            </div>
            <p className="text-primary-grey-neutral-p2 mb-8 text-center">
              Success! Our consultant will be in touch soon.
            </p>
          </fieldset>
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
  ) : (
    <div className="grid-cols-12 flex flex-col lg:grid lg:mx-20">
      <div className="lg:col-span-6">
        <form className="" onSubmit={onSubmit}>
          <fieldset className="flex flex-col gap-y-8 pb-20">
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-primary-grey-neutral-p2 pb-2 text-base"
                htmlFor="message"
              >
                Solution you want to learn about
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg bg-primary-grey-neutral-p2 px-1 py-2 text-base pl-2"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center justify-center w-full text-base"
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
          </fieldset>
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
  );
}

export default FormClient;
