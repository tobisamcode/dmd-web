import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container ">
        <div className="flex items-center py-[32px] lg:py-[80px] justify-between">
          <Link href="/" className="w-[80%] lg:w-auto">
            <div className="text-black-black_10 font-helvetica text-[24px] md:text-[1.75em] font-[700] ">
              DMD <span className="font-[400] -ml-2">.design</span>
            </div>
          </Link>

          <div className="flex flex-wrap gap-y-[32px] gap-x-4 md:gap-[80px] text-black-black_8 text-[14px]  lg:text-[28px] font-[300] underline ">
            <Link href="">Behance</Link>
            <Link href="">LinkedIn</Link>
            <Link href="">Twitter</Link>
            <Link href="">Dribbble</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
