import Button from "components/Button";
import Nav from "components/Nav";
import Link from "next/link";
import { projectData, testimonialInfo } from "data-store";
import Image from "next/image";
import ScrollToTop from "components/scroll-to-top";
import Header from "components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="app relative  dark:bg-[#141414]">
        {/* HEADER */}
        <Header />

        {/* SCROLL TO TOP */}
        <ScrollToTop />

        <main className="container relative md:bg-none overflow-hidden ">
          <div className=" grid  md:grid-cols-2 md:gap-x-[150px] bg-hero-pattern-2 bg-no-repeat md:bg-none ">
            <div className="md:py-[3.625rem] flex flex-col md:justify-center md:font-[500]">
              <span className="flex text-black-black_9 dark:text-white-white_8  text-[18px] lg:text-[1.5rem] mb-[24px]">
                <h1 className="mr-[4px]">Hi</h1>
                <Image height={24} width={24} src="svg/hiicon.svg" alt="hi" />
                <h1 className="flex gap-x-2">
                  ,I’m <span className="hidden lg:flex">Moses Denapo</span>
                  <span className="visible lg:hidden ">DMD</span>
                </h1>
              </span>

              <p className=" md:text-[20px] text-[18px] lg:text-[32px] lg:w-[510px]  text-black-black_9 dark:text-white-white_8 mb-[32px]">
                A creative digital product designer skilled in finding the sweet
                spots between what users want to make their lives easier and
                what the business needs to accomplish in order to survive and
                prosper.
              </p>

              <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[32px]">
                <Link href="#contact-me">
                  <Button
                    text={"Contact me"}
                    icon=<></>
                    className="text-white-white dark:text-black-black_11 py-[0.75rem] md:py-[1rem] bg-black-black_11 dark:bg-white-white self-start  px-[24px] md:px-[32px] rounded-[0.25rem] text-[1.125rem] font-[400]"
                  />
                </Link>
                <Button
                  text="Read more about me"
                  className="py-[0.75rem] md:py-[1rem]  w-[265px] flex items-center gap-x-[8px] px-[24px] md:px-[32px] rounded-[4px] text-[18px] font-[400] text-black-black_11 dark:text-white-white border border-black-black_2 dark:border-[#dark:text-white-white_8"
                  icon={
                    <Image
                      width={20}
                      height={24}
                      alt="arrow"
                      src={`${
                        theme === "light"
                          ? "svg/arrowrighticon.svg"
                          : "svg/arrowwhiterighticon.svg"
                      }`}
                    />
                  }
                />
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <Image
                width={480}
                height={480}
                src="/img/dmdhero.webp"
                alt="hero"
                className="mt-[48px] md:mt-0 hidden md:flex"
              />
              <Image
                width={480}
                height={480}
                src="/img/dmdmobile.webp"
                alt="hero"
                className="mt-[48px] md:mt-0 visible md:hidden w-full"
              />
            </div>
          </div>
        </main>

        {/* PROJECTS SECTION */}

        <section id="project">
          <main className="container ">
            <div className=" flex flex-col gap-4 lg:flex-row lg:gap-x-[100px]">
              <h1 className="lg:w-[200px] self-center lg:self-start text-[32px] lg:text-[48px] font-[700] text-black-black_10 font-helvetica dark:text-white-white     ">
                Featured Projects
              </h1>

              <div className="flex flex-col">
                <div className="lg:w-full self-center  grid gap-[32px] md:grid-cols-2 lg:h-[650px] md:overflow-auto no-scrollbar">
                  {projectData.map((project) => (
                    <div
                      key={project.title}
                      className="flex flex-col p-[24px] items-center lg:p-8 border border-[#EBEBEB] dark:border-[#323232] rounded-[1rem] gap-4 bg-[#FAFAFA] dark:bg-project_bg "
                    >
                      <Image
                        width={335}
                        height={220}
                        src={project.image}
                        alt="project"
                      />
                      <h1 className="font-[700] self-start text-[18px] text-black-black_8 dark:text-white-white_8 ">
                        {project.title}
                      </h1>
                      <p className="font-[300] text-black-black_8 dark:text-white-white_8 text-[14px] lg:text-[18px] ">
                        {project.desc}
                      </p>
                      <Button
                        text="Check full project"
                        className="py-[0.75rem] md:py-[1rem] w-[184px] md:w-[200px] flex items-center gap-x-[8px] px-[24px] bg-[#F0F0F0] dark:bg-[#171717]  md:px-[32px] rounded-[4px] text-[14px]  font-[300] text-black-black_11 dark:text-white-white self-start"
                        icon={
                          <>
                            <Image
                              width={20}
                              height={24}
                              alt="arrow"
                              src={`${
                                theme === "light"
                                  ? "svg/arrowrighticon.svg"
                                  : "svg/arrowwhiterighticon.svg"
                              }`}
                            />
                          </>
                        }
                      />
                    </div>
                  ))}
                </div>
                <Button
                  text="More Projects"
                  className="mt-[50px] self-center py-[0.75rem] md:py-[1rem] w-[184px] md:w-[320px] flex justify-center items-center gap-x-[8px] px-[24px] bg-black-black_10 dark:bg-white-white dark:text-black-black_11 md:px-[32px] rounded-[4px] test-[18px] lg:text-[24px]  font-[400] lg:font-[500] text-white-white"
                  icon={
                    <Image
                      width={20}
                      height={24}
                      alt="arrow"
                      src={`${
                        theme === "light"
                          ? "svg/arrowwhiterighticon.svg"
                          : "svg/arrowrighticon.svg"
                      }`}
                    />
                  }
                />
              </div>
            </div>
          </main>
        </section>

        {/* Reviews & Testimonials */}
        <section className="-mt-20 ">
          <main className="testimonial-container">
            <h1 className="text-[32px] lg:text-[48px] text-black-black_10 dark:text-white-white font-helvetica font-[700] mb-[24px] md:mb-[50px] ">
              Reviews & Testimonials
            </h1>

            <div className="grid grid-flow-col gap-[12px] md:gap-[50px]  overflow-x-scroll no-scrollbar">
              {testimonialInfo.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="md:h-[339px] w-[250px] md:w-[524px] py-4 md:py-0 px-[1rem] md:px-[50px] text-[14px] lg:text-[18px] flex flex-col justify-center rounded-[1rem] border border-[#EBEBEB] dark:border-[#323232] bg-[#FAFAFA] dark:bg-project_bg carousel-item "
                >
                  <p className="mb-4 md:mb-8 text-black-black_8 dark:text-white-white_8  font-[500] ">
                    {testimonial.comment}
                  </p>
                  <h1 className="text-black-black_10 dark:text-white-white_8 font-[700]">
                    {testimonial.author}
                  </h1>
                </div>
              ))}
            </div>
          </main>
        </section>

        {/* CONTACTS */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
