import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="mr-auto">
      <a href="/">
        <Image
          className="logo w-[10em] lg:w-[12em]"
          src="/incommsec-logo.png"
          width={100}
          height={100}
          alt="Incommsec logo"
        />
      </a>
    </div>
  );
}

export default Logo;
