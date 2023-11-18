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
              className="logo "
              src={urlFor(logos.image).url()}
              width={200}
              height={150}
              alt="Incommsec logo"
              unoptimized
            />
          </a>
        </div>
      ))}
    </>
  );
}
