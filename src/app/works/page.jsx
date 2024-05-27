"use client";

import React, { useContext, useEffect } from "react";
import { NavColourContext } from "@/NavColourContext";
import FeaturedWorks from "@/components/FeaturedWorks";
import ReachOut from "@/components/ReachOut";

const Works = () => {
  const show = false;
  const { setNavColour } = useContext(NavColourContext);

  useEffect(() => {
    setNavColour(false);
  }, [setNavColour]);

  return (
    <div className="mt-[10rem] w-full">
      <p className="uppercase text-[14vw] lg:text-[12vw] font-ppEiko ml-5 -mb-[3.5rem] md:-mb-[7%] lg:-mb-[6%]">
        w<span className="italic">o</span>rks
      </p>
      <FeaturedWorks show={show} />
      <ReachOut />
    </div>
  );
};

export default Works;
