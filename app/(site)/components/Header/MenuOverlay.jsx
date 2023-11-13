import React from "react";
import MenuItem from "./MenuItem";

export default function MenuOverlay({ displayMenu }) {
  return (
    <div
      className={`lg:hidden bg-white menu-overlay fixed flex top-[76px] left-0 h-screen w-screen overflow-y-hidden z-10 transform transition-transform duration-300 ${
        displayMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="gap-20 pl-[1rem] ">
        <ul className="flex flex-col gap-y-8 mt-8">
          <MenuItem text="Endpoint protection" link="/" />
          <MenuItem text="Pen Testing and Vulnerability Scans" link="/" />
          <MenuItem text="Phishing risk management and training" link="/" />
          <MenuItem text="Phishing risk management" link="/" />
          <MenuItem text="Employee monitoring" link="/" />
          <MenuItem text="Security Operations Centre as a Service" link="/" />
          <MenuItem text="Accreditations" link="/" />
          <MenuItem text="Email security" link="/" />
          <MenuItem text="Disaster recovery" link="/" />
        </ul>
      </nav>
    </div>
  );
}
