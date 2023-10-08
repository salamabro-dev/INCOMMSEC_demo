import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IconContext } from "react-icons";

export default function MenuItem({ text, link }) {
  return (
    <li className="group">
      <a
        className="group-hover:text-primary-blue-p flex items-center  gap-x-2 "
        href={link}
      >
        <IconContext.Provider
          value={{
            color: "#070731",
          }}
        >
          <ImArrowRight2 className="group-hover:fill-primary-blue-p" />
        </IconContext.Provider>
        {text}
      </a>
    </li>
  );
}
