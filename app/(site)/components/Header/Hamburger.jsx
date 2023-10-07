"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
    </div>
  );
}

export default Hamburger;
