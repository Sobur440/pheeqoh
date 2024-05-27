"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LandingAnimation = () => {
  const progressBarRef = useRef();
  const overlayRef = useRef();
  const titleRef = useRef([]);
  const barsRef = useRef([]);
  const progressBarBorder = useRef();
  const title = ["p", "h", "e", "e", "q", "o", "h"];

  console.log(titleRef.current);

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
        duration: 2,
        ease: "power3.out",
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
        y: -100,
        opacity: 0,
        stagger: { amount: 1, from: "end" },
      })
      .set(overlayRef.current, {
        display: "none",
      });
  }, []);

  return (
    <div className="w-full h-screen fixed z-[999]" ref={overlayRef}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <div
          key={i}
          className="w-full h-[10vh] bg-[#ECE8DC]"
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
