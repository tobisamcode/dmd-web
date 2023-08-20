import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-project_bg">
        <footer className="container ">
          <div className="flex items-center py-[32px] lg:py-[80px] justify-between">
            <Link href="/" className="w-[80%] lg:w-auto">
              <div className="text-black-black_10 dark:text-white-white font-helvetica text-[24px] md:text-[1.75em] font-[700] ">
                DMD <span className="font-[400] -ml-2">.design</span>
              </div>
            </Link>

            <div className="flex flex-wrap gap-y-[32px] gap-x-4 md:gap-[80px] text-black-black_8 dark:text-white-white_8 text-[14px]  lg:text-[28px] font-[300] underline ">
              <a target="_blank" href="https://www.behance.net/denapomosesDMD">
                Behance
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mosesdenapo/"
              >
                LinkedIn
              </a>
              <a target="_blank" href="https://twitter.com/dammyboy121">
                Twitter
              </a>
              <a target="_blank" href="https://dribbble.com/Dammy_121">
                Dribbble
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
