"use client";

import React, { useContext, useEffect, useRef } from "react";
import { NavColourContext } from "@/contexts/NavColourContext";
import FeaturedWorks from "@/components/FeaturedWorks";
import ReachOut from "@/components/ReachOut";
import gsap from "gsap";

const Works = () => {
  const show = false;
  const titleRef = useRef();
  const { setNavColour } = useContext(NavColourContext);

  useEffect(() => {
    setNavColour(false);
  }, [setNavColour]);

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="mt-[10rem] w-full">
      <p
        className="uppercase text-[14vw] lg:text-[12vw] font-ppEiko ml-5 -mb-[3.5rem] md:-mb-[7%] lg:-mb-[6%] opacity-0 translate-y-[100px]"
        ref={titleRef}
      >
        w<span className="italic">o</span>rks
      </p>
      <FeaturedWorks show={show} />
      <ReachOut />
    </div>
  );
};

export default Works;
