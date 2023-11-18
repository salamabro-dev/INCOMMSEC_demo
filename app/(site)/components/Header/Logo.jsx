import React from "react";
import Image from "next/image";
import { getLogo, urlFor } from "../../../..//sanity/sanity-utils";

export default async function Logo() {
  const logo = await getLogo();
  return (
    <>
      {logo.map((logos) => (
        <div className="mr-auto" key={logos._id}>
          <a href="/">
            <Image
              className="logo w-[10em] lg:w-[12em]"
              src={urlFor(logos.image).url()}
              width={100}
              height={100}
              alt="Incommsec logo"
              unoptimized={false}
            />
          </a>
        </div>
      ))}
    </>
  );
}
