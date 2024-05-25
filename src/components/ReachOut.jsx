import React from "react";
import styles from "../app/shared.module.css";
import Link from "next/link";

const ReachOut = () => {
  return (
    <>
      <section className="mt-[4rem] font-ppEiko w-full text-[8vw] md:text-[7vw] lg:w-[85%] pl-[2rem] pr-[1.5rem] md:pr-0 flex flex-col">
        <div
          className={`${styles.reachOut} relative w-[93%] lg:flex justify-end lg:justify-between hidden `}
        >
          <p className="font-neueMontreal max-w-[23rem] text-[1rem] lg:text-[.8rem] xl:text-[1rem] xl:text-justify">
            👋 I&apos;m actively looking for opportunities in product Design (UI
            UX). I am open to working in roles that are remote, full time or
            contract-based. Kindly reach out to me if you are building something
            exciting.
          </p>
          <p className="text-[8.5vw]">AVAILABLE</p>
        </div>
        <p className="lg:hidden text-[2.5vw] font-neueMontreal max-w-[70%] md:max-w-[33rem] mb-[2rem]">
          👋 I&apos;m actively looking for opportunities in product Design (UI
          UX). I am open to working in roles that are remote, full time or
          contract-based. Kindly reach out to me if you are building something
          exciting.
        </p>
        <div className="self-center text-[8.3vw] flex flex-col">
          <p
            className={`${styles.reachOut} relative w-[90%] lg:hidden text-right`}
          >
            AVAILABLE
          </p>
          <p className={`${styles.reachOut} relative w-fit`}>TO WORK, KINDLY</p>
          <p className={`${styles.reachOut} relative w-fit`}>REACH OUT TO ME</p>
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

export default ReachOut;
