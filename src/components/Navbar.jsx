"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { NavColourContext } from "@/contexts/NavColourContext";

const Navbar = () => {
  const { navColour } = useContext(NavColourContext);

  return (
    <nav
      className={`${
        navColour ? "absolute top-0 left-0 text-white" : ""
      } bg-transparent w-full h-[3.5rem]`}
    >
      <div id="top" className="w-0 h-0"></div>
      <div className="flex justify-between items-center w-[95%] h-full bg-inherit mx-auto">
        <Link
          href="/"
          className="uppercase lg:hidden font-neueMachina text-[1.2rem]"
        >
          pheeqoh
        </Link>

        <ul className="hidden w-full lg:flex justify-between">
          <li>
            <Link className="uppercase text-[.85rem] font-extralight" href="/">
              home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-[.85rem] font-extralight"
              href="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link className="uppercase text-[1.3rem] font-neueMachina" href="/">
              pheeqoh
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-[.85rem] font-extralight"
              href="/works"
            >
              works
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-[.85rem] font-extralight"
              href="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
        <div className="uppercase lg:hidden cursor-pointer font-extralight text-[1.2rem]">
          menu
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
