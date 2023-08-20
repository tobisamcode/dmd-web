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
      className={`py-[50px] px-[4.375vw] lg:px-[11.029vw]  top-0  z-40   ${
        showMenu ? "right-0" : "-right-[100%] md:-right-[50%]"
      }  transition-all delay-[0.1s]  z-10 bg-white-white dark:bg-black-black_10 h-[100vh] w-full fixed md:w-[50%] `}
    >
      <header className="w-full   flex justify-end mb-[100px] cursor-pointer">
        <div className="flex gap items-center gap-x-[1.923vw]">
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
          className="flex flex-col gap-[15px] font-[700] text-[28px] text-black-black_10 dark:text-white-white  self-end mb-[50px]"
        >
          <li className="self-end">
            <Link href="/about">About me</Link>
          </li>

          <li className="self-end">
            <Link href="www.behance.net%2FdenapomosesDMD">Projects</Link>
          </li>
          <li className="self-end">
            <Link href="docs.google.com%2Fdocument%2Fd%2F1ba1nCZWN27Eew0d-DB2z-c128KwQ4uXaWAihanY9It0%2Fedit%3Fusp%3Dsharing">
              Check CV
            </Link>
          </li>
          <li>
            <Link className="flex gap-[13px] items-center" href="#contact-me">
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
            </Link>
          </li>
        </ul>

        <ul className="flex flex-wrap self-end w-[300px] text-black-black_10 dark:text-white-white text-[28px] font-[400] gap-x-[80px] gap-y-[24px] ">
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
