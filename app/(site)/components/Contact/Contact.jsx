import React from "react";
import ContactClient from "./ContactClient";
import { getForm, urlFor } from "../../../../sanity/sanity-utils";
import Image from "next/image";

export default async function Contact() {
  const forms = await getForm();
  return (
    <section className="pt-[50px] lg:pt-[100px]">
      <div className="text-center p-12 lg:p-[8rem]">
        <h2 className="banner-heading pb-4">
          Security tailored to your business
        </h2>
        <p className="text-primary-grey-p">
          Get in touch for a free consultation so that we can understand what is
          already in place and recommend the best solution from our selected
          vendors.
        </p>

        <div className="grid-cols-12 flex flex-col my-8 lg:grid lg:mx-20">
          <ContactClient />
          <div className="col-span-6 lg:ml-[5rem] flex justify-center">
            <Image
              className="w-[300px] lg:w-[500px] lg:h-[330px]"
              src="/contact.svg"
              width={500}
              height={330}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
