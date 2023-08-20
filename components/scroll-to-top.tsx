import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[7rem] md:bottom-[5rem] z-20 right-[20px] lg:right-[90px]"
        >
          <div
            className="flex justify-center bg-[#fff] dark:bg-[#1F1F1F] items-center w-[3rem] h-[3rem] lg:w-[72px] lg:h-[72px] p-[0.75rem] lg:p-[1rem] rounded-full "
            style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.10)" }}
          >
            <Image
              width={0}
              height={0}
              src="/svg/arrowup.svg"
              alt="arrow up"
              className={`${
                theme === "dark" && "hidden"
              } w-[1.5rem] h-[1.5rem] lg:w-[2.67rem] lg:h-[2.67rem]`}
            />
            <Image
              width={42}
              height={42}
              src="/svg/arrowupdark.svg"
              alt="arrow"
              className={`${
                theme === "light" && "hidden"
              } w-[1.5rem] h-[1.5rem] lg:w-[2.67rem] lg:h-[2.67rem]`}
            />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
