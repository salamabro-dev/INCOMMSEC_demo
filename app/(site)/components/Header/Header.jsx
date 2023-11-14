"use client";
import { React, useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ProductAndServices from "./ProductAndServices";

function Header({ disableScroll }) {
  const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //   let prevScrollPos = 0;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;

  //     if (currentScrollPos > prevScrollPos) {
  //       setIsScrolled(false); // Scrolling down
  //     } else {
  //       setIsScrolled(true); // Scrolling up
  //     }

  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      className={`fixed top-0 z-50  transition-transform duration-700 transform w-full ${
        isScrolled ? "" : "-translate-y-full"
      }`}
    >
      <nav className="flex px-5 lg:px-10 py-5 font-bold items-center bg-primary-white-p">
        <Logo />
        <ProductAndServices disableScroll={disableScroll} />
        <Hamburger />
      </nav>
    </header>
  );
}

export default Header;
