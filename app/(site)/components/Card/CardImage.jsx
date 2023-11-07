import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

function CardImage() {
  return (
    <section className="p-12">
      <div className="text-center mb-8">
        <h2 className="text-primary-blue-p2 pb-2">
          Find and remediate vulnerabilities
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-12">
        <div className="px-8">
          <div className=" pb-12">
            <p className="text-primary-grey-p text-2xl archivo pb-8 text-center md:text-left">
              Vulnerability scan
            </p>
            <p className="pb-8">
              We scan internal or external facing IP addresses of the
              organisation to the point of identifying a vulnerability.{" "}
            </p>
            <div className="flex md:justify-end py-2">
              <a href="/">
                Find out how we can help{" "}
                <EastIcon
                  className="ml-2"
                  style={{ color: "#343434" }}
                  fontSize="medium"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={"/pen.svg"} height={250} width={250} />
        </div>
      </div>
    </section>
  );
}

export default CardImage;
