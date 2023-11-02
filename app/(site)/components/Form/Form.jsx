import React from "react";
import FormClient from "./FormClient";
import { getForm, urlFor } from "../../../../sanity/sanity-utils";
import Image from "next/image";

export default async function Form() {
  const forms = await getForm();
  return (
    <>
      {forms.map((form) => (
        <section className="grid bg-primary-dark-p pt-8 px-8 pb-16 ">
          <div className="text-center pb-8">
            <h2 className="text-white pb-4">{form.title}</h2>
            <p className="text-primary-grey-neutral-p2 ">{form.subheading}</p>
          </div>
          <div className="grid-cols-12 flex flex-col lg:grid lg:mx-20">
            <FormClient />
            <div className="col-span-6 lg:ml-[5rem] flex justify-center">
              <Image
                className="w-[350px] lg:w-[500px] lg:h-[330px]"
                src={urlFor(form.image).url()}
                alt={form.image.alt}
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
