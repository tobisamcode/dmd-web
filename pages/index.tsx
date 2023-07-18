import { BiRightArrowAlt } from "react-icons/bi";

import Button from "components/Button";

export default function Page() {
  return (
    <>
      <div className="app">
        <div>
          <header className="w-full mb-[40px] py-[1.875rem] px-[4.375vw] lg:px-[11.029vw] flex justify-between md:shadow-header-shadow bg-[#FAFAFA] border-b border-[rgba(191, 191, 191, 0.20)] md:border-none md:bg-white items-center ">
            <div className="text-black-black_10 font-helvetica text-[24px] md:text-[1.75em] font-[700] ">
              DMD <span className="font-[400] -ml-2">.design</span>
            </div>

            <div className="flex gap-x-[1.923vw]">
              <img
                src="svg/darkmodeicon.svg"
                className="w-[1.5rem] md:w-[2rem]"
                alt="menu"
              />
              <img
                src="svg/menuicon.svg"
                className="w-[1.5rem] md:w-[2rem]"
                alt="dark mode"
              />
            </div>
          </header>

          <main className="  px-[5vw] md:px-[11.029vw]">
            <div className="grid  md:grid-cols-2 md:gap-x-[150px] ">
              <div className="md:py-[3.625rem] flex flex-col md:justify-center">
                <span className="flex text-black-black_9 font-[500] text-[18px] lg:text-[1.5rem] mb-[24px]">
                  <h1 className="mr-[4px]">Hi</h1>
                  <img src="svg/hiicon.svg" alt="hi" />
                  <h1>,I’m Moses Denapo</h1>
                </span>

                <p className="md:text-[20px] text-[18px] lg:text-[32px] lg:w-[510px] font-[500] text-black-black_9 mb-[32px]">
                  A creative digital product designer skilled in finding the
                  sweet spots between what users want to make their lives easier
                  and what the business needs to accomplish in order to survive
                  and prosper.
                </p>

                <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[32px]">
                  <Button
                    text={"Contact me"}
                    icon=<></>
                    className="text-white py-[0.75rem] md:py-[1rem] bg-black-black_11 self-start  px-[24px] md:px-[32px] rounded-[0.25rem] text-[1.125rem] font-[400]"
                  />
                  <Button
                    text="Read more about me"
                    className="py-[0.75rem] md:py-[1rem]  w-[260px] flex items-center gap-x-[8px] px-[24px] md:px-[32px] rounded-[4px] text-[18px] font-[400] text-black-black_11 border border-black-black_2"
                    icon={<img src="svg/arrowrighticon.svg" />}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <img
                  src="img/dmdhero.png"
                  alt="hero"
                  className="mt-[48px] md:mt-0 hidden md:flex"
                />
                <img
                  src="img/dmdmobile.png"
                  alt="hero"
                  className="mt-[48px] md:mt-0 visible md:hidden w-full"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
