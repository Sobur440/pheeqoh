"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import styles from "../shared.module.css";
import { NavColourContext } from "@/contexts/NavColourContext";
import Head from "next/head";

const About = () => {
  const { setNavColour } = useContext(NavColourContext);

  useEffect(() => {
    setNavColour(false);
  }, [setNavColour]);

  return (
    <div className="mt-[13rem] w-full">
      <p className="text-[14vw] lg:text-[12vw] uppercase font-ppEiko max-w-[95%] mx-auto">
        <span className="tracking-tighter">
          wh<span className="italic">o</span>
        </span>
        {"  "}
        <span>i</span>
        {"  "}
        <span>
          a<span className="italic">m</span>
        </span>
      </p>
      <div className="w-full h-screen -mt-[4%]">
        <img
          src="/images/aboutImg.png"
          alt="about pheeqoh"
          className="w-full h-full object-cover"
        />
      </div>

      {/* WHO I AM */}

      <section>
        <div className="lg:hidden flex flex-col w-full mx-auto text-justify px-3 text-[5.8vw] font-editorialOld capitalize">
          <div
            className={`${styles.aboutMobile} relative w-full flex justify-between mt-[3rem]`}
          >
            <p className="uppercase text-[.6rem] font-neueMontreal font-extralight">
              who i am
            </p>
            <p>I call myself a</p>
          </div>

          <div
            className="w-full text-[7vw]"
            style={{ textAlignLast: "justify" }}
          >
            <p className={`${styles.aboutMobile} block w-full relative`}>
              CHANGE MAKER because I
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              bring your ideas to life. With a
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              deep passion for creating
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              meaningful experiences, I strive
            </p>{" "}
            <p className={`${styles.aboutMobile} block w-full relative`}>
              to design products that not
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              only look good but also
            </p>
            <p className={`${styles.aboutMobile} w-fit relative`}>
              address real-world problems.
            </p>
          </div>
        </div>

        <div className="hidden font-editorialOld max-w-[98%] p-2 text-[3.8vw] xl:text-[3.9vw] text-justify mx-auto capitalize lg:flex flex-col flex-wrap gap-4 mt-5">
          <div
            className={`${styles.about} relative w-full flex justify-between mt-[3rem]`}
          >
            <p className="uppercase text-[.6rem] font-neueMontreal font-extralight">
              who i am
            </p>
            <p>I call myself a CHANGE MAKER because I bring</p>
          </div>

          <div style={{ textAlignLast: "justify" }}>
            <p className={`${styles.about} block w-full relative`}>
              your ideas to life. With a deep passion for creating meaningful
            </p>
            <span className={`${styles.about} block w-full relative`}>
              experiences, I strive to design products that not only look
            </span>

            <p className={`${styles.about} block relative w-fit`}>
              good but also address real-world problems.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-end gap-2 lg:gap-7 mt-[4rem] w-full mx-auto px-3">
          <div className="flex lg:w-[50%] lg:h-[40rem] xl:w-[35%]">
            <img
              src="/images/resumepheeqoh.png"
              alt="taofeeqoh image"
              className="w-full lg:w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-[40%] xl:w-[30%]">
            <div className="w-full lg:w-full flex flex-col gap-[1.5rem] text-[.9rem]">
              <p className="max-w-full">
                Problem solver and a quick learner, and I bring value to any
                project or team. Skilled in building and nurturing
                relationships, I possess a natural ability to connect with
                others and am dedicated to bringing people together which has
                made me contribute to the companies’ growth I’ve worked with.
              </p>
              <p className="max-w-full">
                Excellent communicator, I actively listen to feedback and
                respond in a way that fosters a sense of community and trust. My
                commitment to building efforts has resulted in over 50% growth
                in the companies I’ve worked with.
              </p>
              <p className="max-w-full">
                Delivering impactful UI solutions is my forte, utilizing tools
                like Adobe XD, Figma, and similar software. To enhance my design
                capabilities, I have explored the realm of design and
                development using No Code Tools. My experience spans across
                diverse domains, including fintech, blockchain, health services,
                e-commerce, and digital marketing. This enables me to handle
                multiple projects in fast-paced environments while prioritizing
                user-centric approaches and diligently assessing user
                requirements.
              </p>
              <p className="max-w-full">
                Committed to continuous growth, I am always seeking knowledge
                and embracing new challenges. If you have a project in mind that
                requires a seamless and exciting experience, let&apos;s
                collaborate!
              </p>
            </div>

            <div className="mt-[2rem]">
              <a href="#" className="uppercase text-[1.9rem]">
                download resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERICES SECTION */}

      <section className="mt-[5rem] lg:mt-[10rem] w-[95%] mx-auto text-[1rem] lg:text-[.8rem]">
        <div className="w-full h-[1px] bg-black mb-[2rem]"></div>

        <div className="w-full flex flex-col gap-[1rem] lg:gap-0 lg:flex-row">
          <p className="lg:w-[50%] uppercase">experiences</p>

          <div className="w-full lg:w-[50%] uppercase">
            <div className="w-full flex justify-between border-b border-black py-[1rem] border-t lg:border-t-0">
              <p className="w-[33.3%] max-w-[33.3%]">company</p>
              <p className="w-[33.3%] max-w-[33.3%]">role</p>
              <p className="w-[33.3%] max-w-[33.3%]">period</p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[33.3%] max-w-[33.3%]">Sysbeams</p>
              <p className="w-[33.3%] max-w-[33.3%]">product designer</p>
              <p className="w-[33.3%] max-w-[33.3%]">Oct 3, 2022</p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[33.3%] max-w-[33.3%]">Invateo Global</p>
              <p className="w-[33.3%] max-w-[33.3%]">product designer</p>
              <p className="w-[33.3%] max-w-[33.3%]">
                Sept 12, 2022 → April 23, 2023
              </p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[33.3%] max-w-[33.3%]">np digital</p>
              <p className="w-[33.3%] max-w-[33.3%]">ux designer</p>
              <p className="w-[33.3%] max-w-[33.3%]">
                Aug 29, 2022 → Sept 29, 2022
              </p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[33.3%] max-w-[33.3%]">kapital grow</p>
              <p className="w-[33.3%] max-w-[33.3%]">product designer</p>
              <p className="w-[33.3%] max-w-[33.3%]">
                May 10, 2022 → Aug 10, 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN I'M NOT DESIGNING SECTION */}

      <section className="mt-[7.5rem] text-white">
        <div
          className={`${styles.idle} w-full h-screen relative flex flex-col justify-end gap-[8rem] pb-[1.2rem]`}
        >
          <p className="uppercase lg:w-[50%] mx-auto text-[6vw] lg:text-[3.5vw] text-center font-ppEiko">
            wh<span className="italic">e</span>n i&apos;m n
            <span className="italic">o</span>t d
            <span className="italic">e</span>signi
            <span className="italic">n</span>g
          </p>

          <div className="w-full flex justify-center font-extralight text-[.9rem] lg:justify-between px-2">
            <p className="hidden lg:block uppercase self-end">
              &copy;host&copy;kbtc2023
            </p>
            <div className="w-[60%] lg:w-[25%] flex flex-col gap-[1rem]">
              <p className="max-w-full">
                I create design-related articles to document my learning journey
                and share my knowledge, aiming to assist others in gaining
                valuable insights.
              </p>
              <p className="max-w-full">
                I serve as a public speaker, having delivered talks at numerous
                tech events and conferences on a diverse range of exciting
                topics. Additionally, I take on event hosting roles, not only to
                foster valuable networking opportunities but also to stay
                well-informed and updated.
              </p>
            </div>
            <p className="hidden lg:block uppercase self-end">scroll down</p>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}

      <section className="mt-[4rem] w-[95%] mx-auto text-[.9rem] lg:text-[.8rem]">
        <div className="w-full h-[1px] bg-black mb-[2rem]"></div>

        <div className="w-full flex flex-col gap-[1rem] lg:gap-0 lg:flex-row">
          <p className="lg:w-[50%] uppercase mb-[1rem] lg:mb-0">blogs</p>

          <div className="w-full lg:w-[50%] uppercase">
            <div className="w-full flex justify-between border-b border-black py-[1rem] border-t lg:border-t-0">
              <p className="w-[75%] lg:w-[33.3%]">
                Unlocking Your UI/UX Design Career with Free collated resources
              </p>
              <p className="w-[50%] max-w-[50%] lg:w-[33.3%] lg:max-w-[33.3%] hidden lg:block text-center">
                Oct 6, 2023
              </p>
              <p className="w-[20%] lg:w-[33.3%] text-right">read</p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[75%] lg:w-[33.3%]">
                Code-Wizardry for Designers
              </p>
              <p className="w-[75%] lg:w-[33.3%] hidden lg:block text-center">
                Jul 22, 2023
              </p>
              <p className="w-[20%] lg:w-[33.3%] text-right">read</p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[75%] lg:w-[33.3%]">
                Beyond style guides: Harnessing the true potential of design
                systems
              </p>
              <p className="w-[75%] lg:w-[33.3%] hidden lg:block text-center">
                Jul 16, 2023
              </p>
              <p className="w-[20%] lg:w-[33.3%] text-right">read</p>
            </div>

            <div className="w-full flex justify-between border-b border-black py-[1rem]">
              <p className="w-[75%] lg:w-[33.3%]">
                Embracing Flexibility: The Evolving Role of UI Grids in Design
                and Development
              </p>
              <p className="w-[75%] lg:w-[33.3%] hidden lg:block text-center">
                Jul 16, 2023
              </p>
              <p className="w-[20%] lg:w-[33.3%] text-right">read</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAINTING ENJOYMENT SECTION */}

      <section className="mt-[8rem]">
        <div className="w-[95%] mx-auto lg:h-[90vh] flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[35%] h-full">
            <img
              src="/images/painting1.png"
              alt="Painting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-[65%] lg:h-full flex flex-col justify-between">
            <div className="flex justify-between w-full lg:w-[90%] lg:self-end order-2 lg:order-1">
              <p className="max-w-full lg:max-w-[65%]">
                {" "}
                I recently discovered a newfound love for painting! It&apos;s
                something I never thought I&apos;d be into, but the vibrant
                colors and expressive strokes have completely captured my heart.
                Art has this incredible way of revealing hidden passions, and
                I&apos;m thrilled to see where this creative adventure takes me!
              </p>

              <div className="w-[30%] hidden lg:block">
                <img
                  src="/images/painting2.png"
                  alt="another painting"
                  className="w-full"
                />
                <p className="max-w-full mt-5">
                  My recent painting shows a dreamy scene with a magical sakura
                  tree under the moon, dropping its cherry blossoms. I&apos;m
                  really happy with how it turned out because I didn&apos;t
                  expect it to be this good.{" "}
                </p>
              </div>
            </div>

            <div className="uppercase font-ppEiko w-full lg:w-[97%] flex flex-col lg:flex-row lg:justify-end lg:gap-5 text-[12vw] lg:text-[6.5vw] order-1 lg:order-2 mt-[2rem] mb-[4rem] leading-[1em]">
              <p>
                i enj
                <div className="inline-block relative">
                  o
                  <div className="absolute left-[10%] top-[35%]">
                    <img
                      src="/images/rose.png"
                      alt="rose image"
                      className="scale-[1.3]"
                    />
                  </div>
                </div>
                y
              </p>
              <p className="self-end lg:self-start">painting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
