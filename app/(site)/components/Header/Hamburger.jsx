"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleClick} className="sm:hidden">
        <MenuIcon
          fontSize="large"
          className={isOpen ? "hidden" : "block"}
          style={{ color: "#00008A" }}
        />
        <CloseIcon
          fontSize="large"
          className={isOpen ? "block" : "hidden"}
          style={{ color: "#00008A" }}
        />
      </button>
    </div>
  );
}

export default Hamburger;
