import React from "react";

function TextBlock() {
  return (
    <section className="bg-primary-grey-p p-12 grid grid-cols-1 md:grid-cols-4">
      <div className=" md:col-span-3 mb-8 md:my-[5rem]">
        <div className="pb-8">
          <h2 className="dark-theme-title-block">Why it’s important</h2>
        </div>
        <p className="text-[#B6B6B6] md:col-span-3">
          At its worst, a data breach will cost money in ransom, loss of
          business through downtime, and loss of reputation. Protecting
          endpoints from cyber threats is about protecting the organization and
          its employees, its intellectual property, and its data.
        </p>
      </div>
      <div className=" md:col-span-3 mb-8 md:my-[5rem]">
        <div className="pb-8">
          <h2 className="dark-theme-title-block">What endpoint security is </h2>
        </div>
        <p className="text-[#B6B6B6] md:col-span-3">
          Endpoint protection is the starting point for defense against cyber
          threats. It helps protect organisations’ systems and customer data. It
          provides an essential layer of security against malware, ransomware,
          known infections, file-based and fileless scripts, APTs, exploits and
          evasive attacks. 
        </p>
      </div>
    </section>
  );
}

export default TextBlock;
