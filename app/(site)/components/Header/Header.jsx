import { React } from "react";
import Hamburger from "./Hamburger";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header({ isOpen }) {
  return (
    <header className="flex px-5 lg:px-10 py-5 font-bold items-center bg-primary-white-p">
      <div className="mr-auto">
        <Image
          className="logo w-[10em] lg:w-[12em]"
          src="/incommsec-logo.png"
          width={100}
          height={100}
          alt="Incommsec logo"
          unoptimized={true}
        />
      </div>
      <div className="hidden lg:flex items-center">
        <button className="mr-8 rounded-full py-4 px-10 bg-primary-blue-p text-white hover:bg-primary-grey-p">
          Product and services
          <KeyboardArrowDownIcon
            className="ml-2"
            style={{ color: "##00008A" }}
            fontSize="large"
          />
        </button>
        <div className="">
          <button
            className="rounded-full py-6 px-10 border-primary-blue-p border bg-white
 hover:border-primary-grey-p hover:bg-primary-grey-p hover:text-white "
          >
            Contact us
          </button>
        </div>
      </div>
      <Hamburger />
    </header>
  );
}

export default Header;
