import React, { useEffect, useRef } from "react";
import styles from "../app/shared.module.css";
import Link from "next/link";
import gsap from "gsap";

const ReachOut = () => {
  const reachoutRef = useRef([]);
  const reachOutConRef = useRef();

  useEffect(() => {
    const reachOutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap
              .timeline()
              .to(reachoutRef.current, {
                y: 0,
                ease: "power3.out",
                stagger: { amount: 0.5 },
                duration: 1,
              })
              .to(styles.reachOut, {
                width: "100%",
                ease: "power3.out",
                stagger: { amount: 0.5 },
                duration: 1,
              });
          }
        });
      },
      { threshold: 0.4 }
    );

    reachOutObserver.observe(reachOutConRef.current);
  }, []);

  return (
    <>
      <section
        className="mt-[6rem] lg:mt-[9rem] font-ppEiko w-full text-[8vw] md:text-[7vw] lg:w-[85%] pl-[2rem] pr-[1.5rem] md:pr-0 flex flex-col"
        ref={reachOutConRef}
      >
        <div
          className={`relative w-[93%] lg:flex justify-end lg:justify-between hidden overflow-y-hidden`}
        >
          <p className="font-neueMontreal max-w-[23rem] text-[1rem] lg:text-[.8rem] xl:text-[1rem] xl:text-justify">
            👋 I&apos;m actively looking for opportunities in product Design (UI
            UX). I am open to working in roles that are remote, full time or
            contract-based. Kindly reach out to me if you are building something
            exciting.
          </p>
          <p
            className="text-[8.5vw] translate-y-[100%]"
            ref={(el) => reachoutRef.current.push(el)}
          >
            AVAILABLE
          </p>
          <div className={`${styles.reachOut}`}></div>
        </div>
        <p className="lg:hidden text-[1rem] font-neueMontreal max-w-[70%] md:max-w-[33rem] mb-[2rem]">
          👋 I&apos;m actively looking for opportunities in product Design (UI
          UX). I am open to working in roles that are remote, full time or
          contract-based. Kindly reach out to me if you are building something
          exciting.
        </p>
        <div className="self-center text-[8.7vw] 2xs:text-[8.8vw] md:text-[8.3vw] flex flex-col">
          <div
            className={`relative w-[90%] lg:hidden text-right overflow-y-hidden`}
          >
            <p
              className="translate-y-[100%]"
              ref={(el) => reachoutRef.current.push(el)}
            >
              AVAILABLE
            </p>
            <div className={`${styles.reachOut}`}></div>
          </div>
          <div className={`relative w-fit`}>
            <p
              className="translate-y-[100%]"
              ref={(el) => reachoutRef.current.push(el)}
            >
              TO WORK, KINDLY
            </p>
            <div className={`${styles.reachOut}`}></div>
          </div>
          <div className={`relative w-fit`}>
            <p
              className="translate-y-[100%]"
              ref={(el) => reachoutRef.current.push(el)}
            >
              REACH OUT TO ME
            </p>
            <div className={`${styles.reachOut}`}></div>
          </div>
        </div>
      </section>
      <Link
        href="/contact"
        className="w-full flex justify-center items-center mt-10"
      >
        <p className="text-[2rem] lg:text-[2.5rem] text-center font-neueMontreal uppercase leading-[1em] mt-[3rem]">
          send me a <br /> message
        </p>
      </Link>
    </>
  );
};

export default ReachOut;
