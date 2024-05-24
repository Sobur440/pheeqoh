"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import styles from "../home.module.css";
import { NavColourContext } from "@/contexts/NavColourContext";
import Head from "next/head";

const About = () => {
  const { setNavColour } = useContext(NavColourContext);

  useEffect(() => {
    setNavColour(false);
  }, [setNavColour]);

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="mt-[15rem] w-full">
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
                  respond in a way that fosters a sense of community and trust.
                  My commitment to building efforts has resulted in over 50%
                  growth in the companies I’ve worked with.
                </p>
                <p className="max-w-full">
                  Delivering impactful UI solutions is my forte, utilizing tools
                  like Adobe XD, Figma, and similar software. To enhance my
                  design capabilities, I have explored the realm of design and
                  development using No Code Tools. My experience spans across
                  diverse domains, including fintech, blockchain, health
                  services, e-commerce, and digital marketing. This enables me
                  to handle multiple projects in fast-paced environments while
                  prioritizing user-centric approaches and diligently assessing
                  user requirements.
                </p>
                <p className="max-w-full">
                  Committed to continuous growth, I am always seeking knowledge
                  and embracing new challenges. If you have a project in mind
                  that requires a seamless and exciting experience, let&apos;s
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

        <section className="mt-[10rem] w-[95%] mx-auto text-[1rem] lg:text-[.8rem]">
          <div className="w-full h-[1px] bg-black mb-[2rem]"></div>

          <div className="w-full flex flex-col gap-[1rem] lg:gap-0 lg:flex-row">
            <p className="lg:w-[50%] uppercase">experiences</p>

            <div className="w-full lg:w-[50%] uppercase">
              <div className="w-full flex justify-between border-b border-black py-[1rem]">
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
      </div>
    </>
  );
};

export default About;
