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
              <Link href="www.behance.net%2FdenapomosesDMD">Behance</Link>
              <Link href="www.linkedin.com%2Fin%2Fmosesdenapo%2F">
                LinkedIn
              </Link>
              <Link href="twitter.com%2Fdammyboy121">Twitter</Link>
              <Link href="dribbble.com%2FDammy_121">Dribbble</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
