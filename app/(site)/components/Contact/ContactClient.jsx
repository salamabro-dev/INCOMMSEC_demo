"use client";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from "@mui/material/CircularProgress";

function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-6">
      <form className="" onSubmit={onSubmit}>
        <fieldset className="flex flex-col gap-y-8 pb-20">
          <div className="flex flex-col">
            <label
              className="text-primary-grey-p pb-2 text-base justify-left flex"
              htmlFor="name"
            >
              Your Name:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-2 px-1 py-2 text-base pl-2 w-full border-blue-700 "
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-primary-grey-p pb-2 text-base flex justify-left "
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-2 px-1 py-2 text-base pl-2 w-full border-blue-700 "
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-primary-grey-p pb-2 text-base justify-left flex"
              htmlFor="message"
            >
              Solution you want to learn about
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-2 px-1 py-2 text-base pl-2 w-full border-blue-700 "
              id="message"
              name="message"
            ></textarea>
          </div>
          {submitted ? (
            <p className="text-primary-grey-p mb-8 text-center">
              Success! Our consultant will be in touch soon.
            </p>
          ) : (
            <div className="flex justify-center">
              <button
                className="w-2/4 text-lg banner-btn rounded-full my-2 py-4 px-10 text-white flex items-center justify-center w-full text-base group"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="mr-2">Loading...</span>
                    <CircularProgress size={20} thickness={4} color="inherit" />
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowForwardIcon
                      className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
                      style={{ color: "#ffff" }}
                      fontSize="large"
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
}

export default ContactClient;
