import React from "react";
import MenuItem from "./MenuItem";

export default function MenuOverlay({ displayMenu, onCloseMenu }) {
  const handleLinkClick = () => {
    onCloseMenu(); // Close the menu when a link is selected
  };

  return (
    <div
      className={`lg:hidden bg-white menu-overlay fixed flex top-[76px] left-0 h-screen w-screen overflow-y-hidden z-10 transform transition-transform duration-300 ${
        displayMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="gap-20 pl-[1rem] w-full ">
        <div className="text-center text-primary-dark-p my-8">
          <p className="text-2xl font-bold archivo text-[#0037C3]">
            Custom EndPoint Security solutions
          </p>
        </div>
        <ul className="flex flex-col gap-y-12 mt-8">
          <MenuItem
            text="Endpoint protection"
            link="/end-point-protection"
            onClick={handleLinkClick}
          />
          <MenuItem
            text="Pen Testing and Vulnerability Scans"
            link="/"
            onClick={handleLinkClick}
          />
          <MenuItem
            text="Phishing risk management and training"
            link="/"
            onClick={handleLinkClick}
          />
          <MenuItem
            text="Phishing risk management"
            link="/"
            onClick={handleLinkClick}
          />
          <MenuItem
            text="Employee monitoring"
            link="/"
            onClick={handleLinkClick}
          />
          <MenuItem
            text="Security Operations Centre as a Service"
            link="/"
            onClick={handleLinkClick}
          />
          <MenuItem text="Accreditations" link="/" onClick={handleLinkClick} />
          <MenuItem text="Email security" link="/" onClick={handleLinkClick} />
          <MenuItem
            text="Disaster recovery"
            link="/"
            onClick={handleLinkClick}
          />
        </ul>
      </nav>
    </div>
  );
}
