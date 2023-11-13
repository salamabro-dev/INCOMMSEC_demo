import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IconContext } from "react-icons";
import Link from "next/link";

export default function MenuItem({ text, link, onClick }) {
  const handleItemClick = () => {
    onClick(); // Invoke the onClick function passed from the parent
  };
  return (
    <li className="group">
      <Link
        className="group-hover:text-primary-blue-p flex items-center  gap-x-2 "
        href={link}
        onClick={handleItemClick}
      >
        <IconContext.Provider
          value={{
            color: "#070731",
          }}
        >
          <ImArrowRight2 className="group-hover:fill-primary-blue-p" />
        </IconContext.Provider>
        {text}
      </Link>
    </li>
  );
}
