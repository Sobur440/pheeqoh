"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { NavColourContext } from "@/contexts/NavColourContext";
import gsap from "gsap";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  const { navColour, navRef, isLoadingComplete } = useContext(NavColourContext);

  useEffect(() => {
    if (isLoadingComplete) {
      gsap.to(navRef.current, {
        y: 0,
        stagger: { amount: 0.7, from: "center" },
        ease: "power3.out",
        duration: 1.5,
      });
    }
  }, [isLoadingComplete]);

  return (
    <nav
      className={`${
        navColour ? "absolute top-0 left-0 text-white" : ""
      } bg-transparent w-full h-[3.5rem]`}
    >
      <div
        className={`${
          hamburger ? "top-0 left-0" : "top-[-100vh] left-0"
        } bg-black text-[#797979] w-full h-screen fixed flex flex-col justify-between z-[99] text-[15vw] font-ppEiko pt-[1rem] transition-all duration-[.8s] ease-out`}
      >
        <div className="flex w-full justify-between px-2 text-[1rem] text-white uppercase font-neueMachina font-extralight">
          <p>pheeqoh</p>
          <p onClick={() => setHamburger(false)}>close</p>
        </div>
        <ul className="ml-2">
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
        </ul>

        <div className="text-[1rem] text-white uppercase font-neueMontreal font-extralight ml-2">
          <a
            href="mailto:taofeeqahbello12@gmail.com"
            target="_blank"
            className="block"
          >
            email
          </a>
          <a
            href="https://twitter.com/PheeqohB"
            target="_blank"
            className="block"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/taofeeqahbello?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHbCivzbDTECEtobOLIku0A%3D%3D "
            target="_blank"
            className="block"
          >
            linkedIn
          </a>
          <a
            href="https://www.instagram.com/taofeeqah_b?igsh=MXh1bXBjN2N1cWJ6OQ== "
            target="_blank"
            className="block"
          >
            instagram
          </a>
        </div>

        <div className="w-full flex justify-between uppercase font-neueMontreal font-extralight text-[.7rem] text-white px-2 pb-2">
          <a href="https://www.linkedin.com/in/qoreebullah/" target="_blank">
            designed by qoreeb
          </a>
          <a
            href="https://www.linkedin.com/in/sobur-abubakar-835b6b246/"
            target="_blank"
          >
            developed by sobur
          </a>
        </div>
      </div>

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
