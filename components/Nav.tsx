import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface INav {
  showMenu: boolean;
  toggleMenu(): void;
}

const Nav = ({ showMenu, toggleMenu }: INav) => {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div
      className={`py-[50px] px-[4.375vw] lg:px-[11.029vw]  top-0  z-50   ${
        showMenu ? "right-0" : "-right-[100%] md:-right-[50%]"
      }  transition-all delay-[0.1s]  z-10 bg-white-white dark:bg-black-black_10 h-[100vh] w-full fixed md:w-[50%] `}
    >
      <header className="w-full   flex justify-end mt-[1.5rem] mb-[100px] cursor-pointer">
        <div className="flex gap items-center  gap-x-[1.2rem] lg:gap-x-[2rem]">
          <>
            <img
              onClick={toggleMode}
              src="svg/darkmodeicon.svg"
              className="w-[1.5rem] md:w-[2rem] dark:hidden"
              alt="dark mode"
            />
            <img
              onClick={toggleMode}
              src="svg/lightmodeicon.svg"
              className="w-[1.5rem] md:w-[2rem] hidden dark:flex "
              alt="dark mode"
            />
          </>
          <>
            <img
              onClick={toggleMenu}
              src="svg/closeicon.svg"
              className="w-[1.5rem] md:w-[2rem] dark:hidden"
              alt="close-icon"
            />
            <img
              onClick={toggleMenu}
              src="svg/closelighticon.svg"
              className="w-[1.5rem] md:w-[2rem] hidden dark:flex "
              alt="close-icon"
            />
          </>
        </div>
      </header>

      <main className="flex flex-col ">
        <ul
          onClick={toggleMenu}
          className="flex flex-col gap-[2.8rem] lg:gap-[36px] font-[700] text-[28px] text-black-black_10 dark:text-white-white  self-end mb-[50px]"
        >
          <li className="self-end">
            <Link href="/about">About me</Link>
          </li>

          <li className="self-end">
            <a href="https://www.behance.net/denapomosesDMD" target="_blank">
              Projects
            </a>
          </li>
          <li className="self-end">
            <a
              href="https://docs.google.com/document/d/1ba1nCZWN27Eew0d-DB2z-c128KwQ4uXaWAihanY9It0/edit"
              target="_blank"
            >
              Check CV
            </a>
          </li>
          <li>
            <a className="flex gap-[13px] items-center" href="#contact-me">
              <span>Contact me</span>
              <img
                src="svg/arrowupright.svg"
                className="dark:hidden"
                alt="up right"
              />
              <img
                src="svg/lightarrowupright.svg"
                className="hidden dark:flex"
                alt="light up right"
              />
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap self-end w-[300px] text-black-black_10 dark:text-white-white text-[28px] font-[400] gap-x-[80px] gap-y-[24px] ">
          <li className="underline">
            <a target="_blank" href="www.behance.net/denapomosesDMD">
              Behance
            </a>
          </li>

          <li className="underline">
            <a target="_blank" href="https://www.linkedin.com/in/mosesdenapo/">
              LinkedIn
            </a>
          </li>

          <li className="underline">
            <a target="_blank" href="https://twitter.com/dammyboy121">
              Twitter
            </a>
          </li>

          <li className="underline">
            <a target="_blank" href="https://dribbble.com/Dammy_121">
              Dribbble
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Nav;
