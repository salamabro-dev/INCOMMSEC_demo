"use client";
import { React, useState, useEffect } from "react";

function HeaderClient({ children }) {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let prevScrollPos = 0;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (window.innerWidth <= 768) {
        setIsMobile(true); // Mobile view
      } else {
        setIsMobile(false); // Desktop view
      }

      if (currentScrollPos > prevScrollPos) {
        setIsScrolled(false); // Scrolling down
      } else {
        setIsScrolled(true); // Scrolling up
      }

      prevScrollPos = currentScrollPos;
    };

    // Initialize on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 z-50 transition-transform duration-700 transform w-full ${
          isMobile && !isScrolled ? "" : isScrolled ? "" : "-translate-y-full"
        }`}
      >
        {children}
      </header>
    </>
  );
}

export default HeaderClient;
