"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import MenuOverlay from "./MenuOverlay";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Toggle overflow-y:hidden on the html element when the menu is open
  const htmlElement = document.documentElement;
  if (!isOpen) {
    htmlElement.style.overflowY = "auto";
  } else {
    htmlElement.style.overflowY = "hidden";
  }

  return (
    <div className="flex">
      <button onClick={handleClick} className="lg:hidden">
        <IconContext.Provider
          value={{
            color: "#00008A",
            size: "2em",
          }}
        >
          <GiHamburgerMenu className={isOpen ? "hidden" : "block"} />
          <AiOutlineClose className={isOpen ? "block" : "hidden"} />
        </IconContext.Provider>
      </button>
      <MenuOverlay displayMenu={isOpen} />
    </div>
  );
}

export default Hamburger;
