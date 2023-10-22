import React from "react";
import FormClient from "./FormClient";

function Form() {
  return (
    <section className="grid bg-primary-dark-p pt-8 px-8 pb-16 ">
      <div className="text-center pb-8">
        <h2 className="text-white pb-4">Talk to a consultant</h2>
        <p className="text-primary-grey-neutral-p2 ">
          We will talk through solutions and recommend the right service plan.
        </p>
      </div>
      <FormClient />
    </section>
  );
}

export default Form;
