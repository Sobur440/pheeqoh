"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { NavColourContext } from "@/contexts/NavColourContext";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const { navColour, navRef } = useContext(NavColourContext);

  return (
    <nav
      className={`${
        navColour ? "absolute top-0 left-0 text-white" : ""
      } bg-transparent w-full h-[3.5rem]`}
    >
      <ul
        className={`${
          hamburger ? "top-0 left-0" : "top-[-100vh] left-0"
        } bg-black text-white w-full h-screen absolute z-[99] text-[1.3rem] flex flex-col gap-[5rem] items-center pt-[1rem] transition-all duration-200`}
      >
        <li
          className="self-end mr-5 cursor-pointer"
          onClick={() => setHamburger(false)}
        >
          close
        </li>
        <li onClick={() => setHamburger(false)}>
          <Link className="uppercase font-extralight" href="/">
            home
          </Link>
        </li>
        <li onClick={() => setHamburger(false)}>
          <Link className="uppercase font-extralight" href="/about">
            about
          </Link>
        </li>

        <li onClick={() => setHamburger(false)}>
          <Link className="uppercase font-extralight" href="/works">
            works
          </Link>
        </li>
        <li onClick={() => setHamburger(false)}>
          <Link className="uppercase font-extralight" href="/contact">
            contact
          </Link>
        </li>
      </ul>

      <div id="top" className="w-0 h-0"></div>
      <div className="flex justify-between items-center w-[95%] h-full bg-inherit mx-auto">
        <Link
          href="/"
          className="uppercase lg:hidden font-neueMachina translate-y-[-100vh] block text-[1.2rem]"
          ref={(el) => navRef.current.push(el)}
        >
          pheeqoh
        </Link>

        <ul className="hidden w-full lg:flex justify-between">
          <li className="overflow-y-hidden">
            <Link
              className="uppercase text-[.85rem] translate-y-[-100vh] block font-extralight"
              ref={(el) => navRef.current.push(el)}
              href="/"
            >
              home
            </Link>
          </li>
          <li className="overflow-y-hidden">
            <Link
              className="uppercase text-[.85rem] translate-y-[-100vh] block font-extralight"
              ref={(el) => navRef.current.push(el)}
              href="/about"
            >
              about
            </Link>
          </li>
          <li className="overflow-y-hidden">
            <Link
              className="uppercase text-[1.3rem] translate-y-[-100vh] block font-neueMachina"
              href="/"
              ref={(el) => navRef.current.push(el)}
            >
              pheeqoh
            </Link>
          </li>
          <li className="overflow-y-hidden">
            <Link
              className="uppercase text-[.85rem] translate-y-[-100vh] block font-extralight"
              ref={(el) => navRef.current.push(el)}
              href="/works"
            >
              works
            </Link>
          </li>
          <li className="overflow-y-hidden">
            <Link
              className="uppercase text-[.85rem] translate-y-[-100vh] block font-extralight"
              ref={(el) => navRef.current.push(el)}
              href="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
        <div
          className="uppercase lg:hidden cursor-pointer font-extralight text-[1.2rem] translate-y-[-100vh] block"
          onClick={() => setHamburger(true)}
          ref={(el) => navRef.current.push(el)}
        >
          menu
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
