import { React } from "react";
import Hamburger from "./Hamburger";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header({ isOpen }) {
  return (
    <header className="flex px-5 lg:px-10 py-5 font-bold items-center bg-primary-white-p">
      <div className="mr-auto">
        <a href="/">
          <Image
            className="logo w-[10em] lg:w-[12em]"
            src="/incommsec-logo.png"
            width={100}
            height={100}
            alt="Incommsec logo"
            unoptimized={true}
          />
        </a>
      </div>
      <div className="hidden lg:flex items-center">
        <button className="py-4 pr-8 text-primary-grey-p group hover:text-primary-blue-p">
          Product and services
          <KeyboardArrowDownIcon
            style={{ color: "##00008A" }}
            fontSize="large"
            className="group-hover:translate-y-2 transition-transform duration-300 ease-in-out"
          />
        </button>
        <div className="">
          <button className="py-6 text-primary-grey-p hover:text-primary-blue-p">
            Contact us
          </button>
        </div>
      </div>
      <Hamburger />
    </header>
  );
}

export default Header;
