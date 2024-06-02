"use client";

import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { NavColourContext } from "@/contexts/NavColourContext";

const LandingAnimation = () => {
  const progressBarRef = useRef();
  const overlayRef = useRef();
  const titleRef = useRef([]);
  const barsRef = useRef([]);
  const progressBarBorder = useRef();
  const { heroRef, nameContainerRef, heroParagraphRef, navRef, heroContext } =
    useContext(NavColourContext);
  const title = ["p", "h", "e", "e", "q", "o", "h"];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      ease: "back(4)",
      stagger: { amount: 0.6 },
    })
      .to(progressBarRef.current, {
        width: "100%",
        duration: 5,
        ease: "power2.out",
      })
      .to(titleRef.current, {
        y: -100,
        opacity: 0,
      })
      .to(progressBarRef.current, {
        width: 0,
        ease: "power2.out",
        duration: 1.5,
      })
      .to(
        progressBarBorder.current,
        {
          opacity: 0,
        },
        "<0.7"
      )
      .to(barsRef.current, {
        scaleY: 0,
        stagger: { amount: 1, from: "end" },
        duration: 1.5,
        ease: "power3.out",
      })
      .set(overlayRef.current, {
        display: "none",
      })
      .to(heroRef.current, {
        y: 0,
        stagger: { amount: 1 },
        duration: 1,
        ease: "power3.out",
      })
      .set(nameContainerRef.current, {
        overflow: "visible",
      })
      .to(
        heroParagraphRef.current,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          y: 0,
          ease: "power3.out",
        },
        "-=2.5"
      )
      .to(
        navRef.current,
        {
          y: 0,
          stagger: { amount: 0.5, from: "center" },
          ease: "power3.out",
          duration: 2,
        },
        "-=2.2"
      );
  }, []);

  // useEffect(() => {
  //   const heroObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });
  //   heroObserver.observe(heroContext.current);
  // }, []);

  return (
    <div className="w-full h-screen fixed z-[999]" ref={overlayRef}>
      {[0, 1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="w-full h-[20vh] bg-[#ECE8DC] flex flex-col justify-between origin-top"
          ref={(el) => (barsRef.current[i] = el)}
        ></div>
      ))}
      <div className="absolute w-full h-[60vh] top-[20vh] left-0 flex flex-col justify-between items-center">
        <div className="text-[3rem] uppercase font-neueMachina h-[50px] font-bold flex">
          {title.map((letter, i) => (
            <span
              key={i}
              className="translate-y-[100px] opacity-0"
              ref={(el) => (titleRef.current[i] = el)}
            >
              {letter}
            </span>
          ))}
        </div>
        <div
          className={`border-2 py-[7px] border-[gray] bg-transparent w-[80%] h-[8px] md:w-[60%] flex items-center`}
          ref={progressBarBorder}
        >
          <div className="w-[98%] mx-auto h-[6px]">
            <div
              className="bg-black w-0 px-2 h-full"
              ref={progressBarRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAnimation;
