import Image from "next/image";
import React from "react";
import Link from "next/link";
import Nav from "components/Nav";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <header className="w-[100%] mb-[60px] md:mb-[90px]   md:shadow-header-shadow bg-[#FAFAFA] border-b border-[rgba(191, 191, 191, 0.20)] md:border-none  md:bg-white sticky ">
        <nav className=" container py-[1.875rem]  flex justify-between items-center">
          <Link href="/">
            <div className="text-black-black_10 font-helvetica text-[24px] md:text-[1.75em] font-[700] ">
              DMD <span className="font-[400] -ml-2">.design</span>
            </div>
          </Link>

          <div className="flex gap-x-[1.923vw] cursor-pointer">
            <Image
              height={32}
              width={32}
              src="svg/darkmodeicon.svg"
              className="w-[1.5rem] md:w-[2rem]"
              alt="menu"
            />
            <Image
              height={32}
              width={32}
              onClick={handleMenuToggle}
              src="svg/menuicon.svg"
              className="w-[1.5rem] md:w-[2rem]"
              alt="dark mode"
            />
          </div>
        </nav>
      </header>

      {/* OVERLAY & NAV */}
      <>
        {showMenu && (
          <div
            className={`overlay ${showMenu === true ? "active" : ""}`}
            onClick={handleMenuToggle}
          ></div>
        )}
        <Nav showMenu={showMenu} toggleMenu={handleMenuToggle} />
      </>

      {/* HOME SECTION */}
    </>
  );
};

export default Header;
