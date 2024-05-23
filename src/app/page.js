/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}

      <section className={`${styles.hero} text-white w-full mx-auto pb-3`}>
        <div className="w-[95%] mx-auto h-full flex flex-col justify-end">
          <div className="w-full h-[55%] md:h-[70%] flex flex-col justify-between items-center mx-auto">
            <div className="w-full font-ppEiko text-[18.3vw] md:text-[17vw] lg:text-[10vw] leading-[.8] lg:leading-none flex flex-col justify-end md:justify-start items-center ml-[1.3rem] md:ml-[3.6rem] lg:ml-0 h-[75%] gap-[2.5rem] md:gap-[3rem]">
              <div className="w-full flex flex-col">
                <div className="flex w-full mx-auto lg:justify-between">
                  <p className="uppercase">
                    be<span className="italic">l</span>lo
                  </p>
                  <p className="hidden lg:block font-neueMontreal text-[1rem] leading-[1.4em] text-justify max-w-[25rem]">
                    I&apos;m a change-making Product/UX designer with 2 years
                    experience in fintech, SaaS, management, e-commerce, and
                    blockchain. I&apos;m passionate about creating meaningful
                    experiences that address real-world problems.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row uppercase lg:self-end">
                  <p className="self-center lg:self-start">
                    ta<span className="italic">o</span>
                  </p>
                  <p>
                    (feeq<span className="italic">a</span>h)
                  </p>
                </div>
              </div>
              <p className="max-w-full md:max-w-[40rem] font-extralight font-neueMontreal lg:hidden text-[.8rem] md:text-[1rem] leading-[1.2em] tracking-[.13em]">
                Change-making Product/UX designer with 2 years experience in
                fintech, SaaS, management, e-commerce, and blockchain.
              </p>
            </div>

            <div className="w-full flex justify-center lg:justify-between text-[.8rem]">
              <p className="uppercase hidden lg:block">
                &copy;{new Date().getFullYear()} bello taofeeqah
              </p>
              <p className="uppercase">scroll down</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="mt-[3.5rem]">
        <div
          className={`max-w-[80%] md:max-w-[36rem] ml-3 mb-[2rem] text-justify text-[1.2rem] md:text-[3vw] lg:hidden font-neueMontreal`}
        >
          <p className="text-right">
            I&apos;m Bello Taofeeqah, but you can call
          </p>
          me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting
          strategic solutions that drive product success.
        </div>
        <div className="lg:hidden flex flex-col w-full mx-auto text-justify px-3 text-[5.8vw] font-editorialOld capitalize">
          <p className={`${styles.aboutMobile} relative w-full text-right`}>
            My skills encompass
          </p>
          <div
            className="w-full text-[7vw]"
            style={{ textAlignLast: "justify" }}
          >
            <p className={`${styles.aboutMobile} block w-full relative`}>
              extensive research, interface
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              design, and wireframing. I&apos;m
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              dedicated to continuous process
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              improvement, sharing UX
            </p>{" "}
            <p className={`${styles.aboutMobile} block w-full relative`}>
              knowledge, and transforming
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              intricate business concepts into
            </p>
            <p className={`${styles.aboutMobile} block w-full relative`}>
              visually captivating, user-
            </p>
          </div>
          <p className={`${styles.aboutMobile} w-fit relative`}>
            centric designs.
          </p>
        </div>

        <div>
          <div className="hidden font-editorialOld max-w-[98%] p-2 text-[3.9vw] text-justify mx-auto capitalize lg:flex flex-col flex-wrap gap-4">
            <div
              className={`${styles.aboutBlack} relative flex justify-between mb-[-1rem] w-full`}
            >
              <div
                className={`max-w-[16rem] ml-3 mb-[2rem] text-justify text-[.8rem] font-neueMontreal`}
              >
                <p className="text-right">
                  I&apos;m Bello Taofeeqah, but you can call
                </p>
                me Pheeqoh. As an experienced Product/UX Designer, I excel in
                crafting strategic solutions that drive product success.
              </div>

              <p className="inline-block text-right mt-[1rem]">
                My skills encompass extensive research,
              </p>
            </div>

            <div style={{ textAlignLast: "justify" }}>
              <span className={`${styles.about} block w-full relative`}>
                interface design, and wireframing. I&apos;m dedicated to
                continuous
              </span>
              <span className={`${styles.about} block w-full relative`}>
                process improvement, sharing UX knowledge, and transforming
              </span>
              <span className={`${styles.about} block w-full relative`}>
                intricate business concepts into visually captivating, user-
              </span>
            </div>
            <p className={`${styles.aboutBlackSecond} block relative w-fit`}>
              centric designs.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end lg:justify-end gap-2 lg:gap-7 mt-[2rem] w-full mx-auto px-2">
          <div className="lg:order-2 flex justify-end">
            <img
              src="/images/pheeqohfan.png"
              alt="taofeeqoh image holding a fan"
              className="w-[60%] md:w-[30rem] cover"
            />
          </div>
          <Link href="/about" className="uppercase text-[1.9rem] lg:order-1">
            know more
          </Link>
        </div>
      </section>

      {/* FEATURED WORKS SECTION */}

      <section className="mt-10 text-white w-full flex flex-col">
        <p className="text-black uppercase font-extrabold ml-3 mb-2 text-[.8rem]">
          featured works
        </p>
        <div
          className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center ${styles.pos}`}
        >
          <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
            <p className="text-[1rem] md:text-[1.2rem]">SeamlessPOS</p>
            <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
            <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
              Meet SeamlessPOS, a game-changer for restaurant and hospitality
              operations. This cutting-edge solution revolutionizes order and
              inventory management, providing a seamless experience. With a
              user-friendly design, SeamlessPOS empowers teams to handle orders,
              manage inventory, and deliver outstanding service in real-time.
            </p>
          </div>
        </div>

        <div
          className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center my-4 lg:my-0 ${styles.eohs}`}
        >
          <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
            <p className="text-[1rem] md:text-[1.2rem]">EOHS</p>
            <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
            <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
              I created this App to help customers of any Online Shopping
              Platform to order and pay with their cryptocurrency with ease
              especially E-commerce products within Web2 to learn a little about
              Web3 because most people now trade with coins. Introducing this
              feature into the Web2 products will make the ordering process
              smooth and quick without the exchange of coins before any users
              can get stuff online.
            </p>
          </div>
        </div>

        <div
          className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center ${styles.insta}`}
        >
          <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
            <p className="text-[1rem] lg:max-w-[7rem]">
              Instagram Mobile App Redesign
            </p>
            <p className="text-[1rem]">UI/UX DESIGN</p>
            <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
              Enhancing accessibility by allowing users to effortlessly drag and
              drop their preferred highlights without disruption. Introducing a
              seamless dropdown above the highlights, providing easy navigation
              through lists. Crafting an intuitive and interactive interface for
              a simplified user experience.
            </p>
          </div>
        </div>

        <Link
          href="/works"
          className="block uppercase text-black text-center text-[2rem] lg:text-[3rem] leading-[.9em] self-center mt-10"
        >
          view all <span className="block">works</span>
        </Link>
      </section>

      {/* REACHOUT */}

      <section className="mt-[4rem]  font-ppEiko w-full text-[8vw] md:text-[7vw] lg:w-[85%] pl-[2rem] pr-[1.5rem] md:pr-0 flex flex-col">
        <div className="w-[93%] lg:flex justify-end lg:justify-between hidden">
          <p className="font-neueMontreal max-w-[19rem] text-[1rem] self-start text-justify">
            👋 I&apos;m actively looking for opportunities in product Design (UI
            UX). I am open to working in roles that are remote, full time or
            contract-based. Kindly reach out to me if you are building something
            exciting.
          </p>
          <p>AVAILABLE</p>
        </div>
        <p className="lg:hidden text-[2.5vw] font-neueMontreal max-w-[70%] md:max-w-[33rem] mb-[2rem]">
          👋 I&apos;m actively looking for opportunities in product Design (UI
          UX). I am open to working in roles that are remote, full time or
          contract-based. Kindly reach out to me if you are building something
          exciting.
        </p>
        <div className="self-center text-[8.3vw] flex flex-col">
          <p className="lg:hidden">AVAILABLE</p>
          <p>TO WORK, KINDLY</p>
          <p>REACH OUT TO ME</p>
        </div>
      </section>

      <Link
        href="/contact"
        className="w-full flex justify-center items-center mt-10"
      >
        <p className="text-[2rem] lg:text-[2.5rem] text-center font-neueMontreal uppercase leading-[1em]">
          send me a <br /> message
        </p>
      </Link>
    </>
  );
};

export default Home;
