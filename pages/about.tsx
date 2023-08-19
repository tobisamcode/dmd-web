import React from "react";
import Header from "components/Header";
import Image from "next/image";
import { Experinces } from "data-store";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const about = () => {
  return (
    <div className="relative dark:bg-[#141414] ">
      <Header />

      <section className=" mt-[5rem] pb-[5rem] md:pb-[7.6rem] p-0 ">
        <div className="container ">
          <h1 className="mb-[1.5rem] lg:mb-[3.12rem] text-black-black_11 dark:text-white-white font-helvetica font-[700] text-[2rem] lg:text-[3rem] ">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-[5rem] md:gap-[9.12rem] ">
            <div className="flex flex-col lg:first-letter md:w-[53%]">
              <p className="text-black-black_10 dark:text-white-white_9 text-[1.125rem] md:text-[1.5rem] font-[500] mb-[2rem] ">
                I’m Moses Denapo aka “DMD”, a digital product designer with
                expertise creating user interfaces for both mobile and web
                applications.
              </p>

              <p className="text-black-black_8 dark:text-white-white_8 text-[.875rem] md:text-[1.125rem] font-[400]">
                I focus on delivering superior user experiences and aligning
                user expectations with business goals. By uncovering the “sweet
                spots” between the user needs and business objectives, I design
                interfaces that not only meet user expectations but also
                contribute to the growth and success of the business.
              </p>
              <p className="text-black-black_8 dark:text-white-white_8 text-[.875rem] md:text-[1.125rem] font-[400] mt-[2rem] ">
                I also ensure that my design decisions creates a “value loop” in
                which values goes out to the users and in doing so, comes back
                to the business as well. that my design decisions creates a
                value loop in which values goes out to the users and in doing
                so, comes back to the business as well.
              </p>
            </div>

            <div className="flex flex-col md:w-[35%] text-center text-black-black_10 dark:text-white-white_9 ">
              <p
                className="font-[400] text-[1.125rem] md:text-[2rem] "
                style={{ fontStyle: "italic" }}
              >
                “When design, technology, and business align, you can change
                people's lives”
              </p>
              <p className="text-[1.5rem] md:text-[2rem] font-[700] ">-</p>
              <p className="font-[700] text-[1.5rem] md:text-[2rem] ">
                Steve Johnson, VP of Design at Netflix
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 lg:pt-[5rem]">
        <div className="container">
          <h1 className=" self-center lg:self-start text-[2rem] lg:text-[48px] font-[700] text-black-black_10 dark:text-white-white font-helvetica mb-[2.12rem] lg:mb-[3.12rem] ">
            Professional Experience
          </h1>

          <div className="flex md:justify-end   ">
            <div className="w-full md:w-[70%] flex flex-col gap-y-[1.25rem] border border-[#EBEBEB] dark:border-[#323232] rounded-[1rem] py-[2rem] px-[1rem] lg:py-[2.5rem] lg:px-[5rem] bg-[#FAFAFA] dark:bg-project_bg ">
              {Experinces.map(({ id, role, company, from, to, border }) => (
                <div
                  key={id}
                  className={`flex pb-[1.25rem] ${border} border-[#535353] lg:gap-[7.5rem] lg:items-center justify-between`}
                >
                  <div className="flex gap-2 lg:gap-4 lg:w-[70%]">
                    <h1 className=" text-black-black_10 dark:text-white-white  text-[1.125rem] lg:text-[1.5rem] font-[700] ">
                      {id}.
                    </h1>

                    <div className="flex flex-col  gap-[.5rem]">
                      <p className=" text-black-black_10 dark:text-white-white text-[1.125rem] lg:text-[1.5rem] font-[500] lg:font-[700]">
                        {role}
                      </p>
                      <p className="text-black-black_8 dark:text-white-white_8 text-[.875rem] lg:text-[1.125rem] font-[500] ">
                        {company}
                      </p>
                    </div>
                  </div>

                  <div className="flex  flex-col lg:flex-row  w-[50%] lg:w-[50%] gap-[.12rem] md:gap-4 justify-center items-center text-black-black_8 dark:text-white-white_8 text-[.875rem] lg:text-[1.125rem] font-[400] lg:font-[500]">
                    <p className="lg:w-[35%] text-center">{from}</p>
                    <Image
                      className="hidden md:flex"
                      src="/svg/arrow-exp.svg"
                      height={16}
                      width={16}
                      alt="arrow-right"
                    />
                    <Image
                      className="md:hidden"
                      src="/svg/arrow-exp-down.svg"
                      height={12}
                      width={12}
                      alt="arrow-down"
                    />
                    <p className="lg:w-[20%] text-center">{to}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default about;
