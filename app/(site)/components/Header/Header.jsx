import { React } from "react";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <header className="flex px-10 sm:px-20 py-5 font-bold items-center bg-red-500">
      <div className="mr-auto">logo</div>
      <div className="hidden sm:flex items-center">
        <button className="mr-8 rounded-full bg-white p-4">
          Product and services
        </button>
        <div className="rounded-full bg-white p-4">Contact Us</div>
      </div>
      <Hamburger />
    </header>
  );
}

export default Header;
