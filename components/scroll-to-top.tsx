import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

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
            className="flex justify-center bg-[#fff] items-center w-[72px] h-[72px] p-[1rem] rounded-full "
            style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.10)" }}
          >
            <Image
              width={42}
              height={42}
              src="/svg/arrowup.svg"
              alt="arrow up"
            />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
