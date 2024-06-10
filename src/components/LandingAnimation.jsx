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
  const { setIsLoadingComplete } = useContext(NavColourContext);
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
        width: "50%",
        duration: 5,
        ease: "power2.out",
      })
      .call(() => {
        if (document.readyState === "complete") {
          gsap
            .timeline()
            .to(progressBarRef.current, {
              width: "100%",
              duration: 5,
              ease: "power2.inOut",
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
            .set(
              overlayRef.current,
              {
                display: "none",
                onComplete: () => setIsLoadingComplete(true),
              },
              "-=0.7"
            );
        } else {
          window.addEventListener("load", () => {
            gsap
              .timeline()
              .to(progressBarRef.current, {
                width: "100%",
                duration: 5,
                ease: "power2.inOut",
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
              .set(
                overlayRef.current,
                {
                  display: "none",
                  onComplete: () => setIsLoadingComplete(true),
                },
                "-=0.7"
              );
          });
        }
      });

    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  // useEffect(() => {
  //   const heroObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });
  //   heroObserver.observe(heroContext.current);

  return (
    <div
      className="w-full h-screen fixed z-[999] overflow-hidden"
      ref={overlayRef}
    >
      {[0, 1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="w-full h-[20vh] bg-[#ECE8DC] flex flex-col justify-between origin-top"
          ref={(el) => (barsRef.current[i] = el)}
        ></div>
      ))}
      <div className="absolute w-full h-[60vh] top-[20vh] left-0 flex flex-col justify-between items-center">
        <div className=" text-[2rem] md:text-[3rem] uppercase font-neueMachina h-[50px] font-bold flex">
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
