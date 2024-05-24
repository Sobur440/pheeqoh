/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../home.module.css";

export const metadata = {
  title: "Pheeqah | About",
  description: "Pheeqah",
};

const About = () => {
  return (
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
      </section>
    </div>
  );
};

export default About;
