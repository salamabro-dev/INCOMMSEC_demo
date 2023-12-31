import React from "react";
import MenuItem from "./MenuItem";

export default function MenuOverlay({ displayMenu, onCloseMenu }) {
  const handleLinkClick = () => {
    onCloseMenu(); // Close the menu when a link is selected
  };

  return (
    <div
      className={`lg:hidden bg-white menu-overlay fixed flex top-[100px] left-0 h-screen w-screen z-10 transform transition-transform duration-300 ${
        displayMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="pl-[1rem] w-full ">
        <div className="text-center text-primary-dark-p my-8">
          <p className="text-2xl font-bold archivo text-primary-blue-p">
            Custom EndPoint Security solutions
          </p>
        </div>
        <ul className="flex flex-col gap-y-8 mt-8">
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
          <MenuItem text="Disaster recovery" link="/" />
        </ul>
      </nav>
    </div>
  );
}
