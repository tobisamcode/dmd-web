import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="bg-contact-pattern dark:hidden" id="contact-me">
        <main className="container  ">
          <div className="py-[120px] md:py-[180px]  ">
            <p className="text-black-black_10 dark:text-white-white font-[700]  text-[1.75rem] lg:text-[48px] font-helvetica mb-4 md:mb-[32px] ">
              Your Product Vision, Crafted to Perfection! 🌟 Reach Out, let's
              Collaborate and design brilliance
            </p>
            <Link
              href="mosesdenapo@gmail.com"
              className="text-black-black_8 dark:text-white-white_8 font-[500]  underline text-[1rem] lg:text-[32px]"
            >
              send me a mail📩
            </Link>
          </div>
        </main>
      </div>

      <div className="hidden dark:flex dark:bg-project_bg " id="contact-me">
        <main className="container  ">
          <div className="py-[120px] md:py-[180px]  ">
            <p className="text-black-black_10 dark:text-white-white font-[700]  text-[1.75rem] lg:text-[48px] font-helvetica mb-4 md:mb-[32px] ">
              Your Product Vision, Crafted to Perfection! 🌟 Reach Out, let's
              Collaborate and design brilliance
            </p>
            <Link
              href="mosesdenapo@gmail.com"
              className="text-black-black_8 dark:text-white-white_8 font-[500]  underline text-[1rem] lg:text-[32px]"
            >
              send me a mail📩
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
