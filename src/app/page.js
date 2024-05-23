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
            <div className="w-full font-ppEiko text-[17vw] md:text-[17vw] lg:text-[10vw] leading-[.8] lg:leading-none flex flex-col items-center ml-[1.3rem] md:ml-[3.6rem] lg:ml-0">
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

            <p className="max-w-full md:max-w-[40rem] lg:hidden my-[2rem] tracking-[.15em]">
              Change-making Product/UX designer with 2 years experience in
              fintech, SaaS, management, e-commerce, and blockchain.
            </p>

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
          className={`max-w-[16rem] ml-3 mb-[2rem] text-justify font-extrabold text-[.8rem] lg:hidden font-neueMontreal`}
        >
          <p className="text-right">
            I&apos;m Bello Taofeeqah, but you can call
          </p>
          me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting
          strategic solutions that drive product success.
        </div>
        <div className="lg:hidden flex flex-col w-full mx-auto items-end text-justify px-3 text-[5.5vw] font-editorialOld capitalize">
          <p>My skills encompass</p>
          <p className="max-w-full">
            extensive research, interface design, and wireframing. I&apos;m
            dedicated to continuous process improvement, sharing UX knowledge,
            and transforming intricate business concepts into visually
            captivating, user-centric designs.
          </p>
        </div>

        <div>
          <div className="hidden font-editorialOld max-w-[98%] p-2 text-[3.9vw] text-justify mx-auto capitalize lg:flex flex-col flex-wrap gap-4">
            <div className="flex justify-between mb-[-2rem]">
              <div
                className={`max-w-[16rem] ml-3 mb-[2rem] text-justify font-extrabold text-[.8rem] font-neueMontreal`}
              >
                <p className="text-right">
                  I&apos;m Bello Taofeeqah, but you can call
                </p>
                me Pheeqoh. As an experienced Product/UX Designer, I excel in
                crafting strategic solutions that drive product success.
              </div>

              <p className="inline-block text-right">
                My skills encompass extensive research,
              </p>
            </div>

            <p>
              interface design, and wireframing. I&apos;m dedicated to
              continuous process improvement, sharing UX knowledge, and
              transforming intricate business concepts into visually
              captivating, user- centric designs.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end lg:justify-end gap-2 lg:gap-7 mt-[2rem] w-full mx-auto px-2">
          <div className="lg:order-2">
            <Image
              src="/images/pheeqohfan.png"
              alt="taofeeqoh image holding a fan"
              width={500}
              height={500}
              className="w-[30rem]"
            />
          </div>
          <Link
            href="/about"
            className="uppercase self-end text-[1.5rem] font-extrabold lg:order-1"
          >
            know more
          </Link>
        </div>
      </section>

      {/* FEATURED WORKS SECTION */}

      <section className="mt-7 text-white w-full flex flex-col">
        <p className="text-black uppercase font-extrabold ml-3 mb-2 text-[.8rem]">
          featured works
        </p>
        <div
          className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center ${styles.pos}`}
        >
          <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
            <p className="font-extrabold text-[1.2rem]">SeamlessPOS</p>
            <p className="font-extrabold text-[1.2rem]">UI/UX DESIGN</p>
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
            <p className="font-extrabold text-[1.2rem]">EOHS</p>
            <p className="font-extrabold text-[1.2rem]">UI/UX DESIGN</p>
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
            <p className="font-extrabold text-[1.2rem] lg:max-w-[7rem]">
              Instagram Mobile App Redesign
            </p>
            <p className="font-extrabold text-[1.2rem]">UI/UX DESIGN</p>
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
          className="block uppercase text-black font-extrabold text-[2rem] lg:text-[3rem] leading-[1em] self-center mt-10"
        >
          view all <span className="block ml-2">works</span>
        </Link>
      </section>

      {/* REACHOUT */}

      <section className="mt-[5rem] font-ppEiko w-full md:text-[7vw] lg:w-[80%] pl-[2rem] pr-[1.5rem] md:pr-0 flex flex-col text-[8vw]">
        <div className="w-full lg:flex justify-end lg:justify-between hidden">
          <p className="font-neueMontreal max-w-[19rem] text-[1rem] self-start text-justify font-extrabold">
            👋 I&apos;m actively looking for opportunities in product Design (UI
            UX). I am open to working in roles that are remote, full time or
            contract-based. Kindly reach out to me if you are building something
            exciting.
          </p>
          <p>AVAILABLE</p>
        </div>
        <p className="lg:hidden text-[1.2rem] font-neueMontreal max-w-[30rem] font-extrabold mb-[.5rem] ">
          👋 I&apos;m actively looking for opportunities in product Design (UI
          UX). I am open to working in roles that are remote, full time or
          contract-based. Kindly reach out to me if you are building something
          exciting.
        </p>
        <div className="self-center lg:self-end flex flex-col items-end">
          <p className="lg:hidden">AVAILABLE</p>
          <p>TO WORK, KINDLY</p>
          <p>REACH OUT TO ME</p>
        </div>
      </section>

      <Link
        href="/contact"
        className="w-full flex justify-center items-center mt-10"
      >
        <p className="text-[2rem] lg:text-[3rem] font-neueMontreal uppercase leading-[1em] font-extrabold">
          send me a <br /> message
        </p>
      </Link>
    </>
  );
};

export default Home;
