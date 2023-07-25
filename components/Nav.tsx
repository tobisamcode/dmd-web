import React from "react";
import Link from "next/link";

interface INav {
  showMenu: boolean;
  toggleMenu(): void;
}

const Nav = ({ showMenu, toggleMenu }: INav) => {
  return (
    <div
      className={`py-[50px] px-[4.375vw] lg:px-[11.029vw]  top-0   ${
        showMenu ? "right-0" : "-right-[100%] md:-right-[50%]"
      }  transition-all delay-[0.1s] border z-10 bg-white h-[100vh] w-full fixed md:w-[50%] `}
    >
      <header className="w-full   flex justify-end mb-[100px] cursor-pointer">
        <div className="flex gap items-center gap-x-[1.923vw]">
          <img
            src="svg/darkmodeicon.svg"
            className="w-[1.5rem] md:w-[2rem]"
            alt="dark mode"
          />
          <img
            onClick={toggleMenu}
            src="svg/closeicon.svg"
            className="w-[1.5rem] md:w-[2rem]"
            alt="close-icon"
          />
        </div>
      </header>

      <main className="flex flex-col ">
        <ul
          onClick={toggleMenu}
          className="flex flex-col gap-[50px] font-[700] text-[28px] text-black-black_10  self-end mb-[50px]"
        >
          <li className="self-end">
            <Link href="/">About me</Link>
          </li>

          <li className="self-end">
            <Link href="/">Projects</Link>
          </li>
          <li className="self-end">
            <Link href="/">Check CV</Link>
          </li>
          <li>
            <Link className="flex gap-[13px] items-center" href="/">
              <span>Contact me</span>
              <img src="svg/arrowupright.svg" alt="up right" />
            </Link>
          </li>
        </ul>

        <ul className="flex flex-wrap self-end w-[300px] text-black-black_10 text-[28px] font-[400] gap-x-[80px] gap-y-[24px] ">
          <li className="underline">
            <Link href="">Behance</Link>
          </li>

          <li className="underline">
            <Link href="">LinkedIn</Link>
          </li>

          <li className="underline">
            <Link href="">Twitter</Link>
          </li>

          <li className="underline">
            <Link href="">Dribbble</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Nav;
