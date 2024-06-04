import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import styles from "../app/shared.module.css";
import gsap from "gsap";
import { NavColourContext } from "@/contexts/NavColourContext";

const FeaturedWorks = ({ show }) => {
  const worksTitleRef = useRef();
  const firstWorkRef = useRef();
  const secWorkRef = useRef();
  const thirdWorkRef = useRef();
  const workCon1Ref = useRef();
  const workCon2Ref = useRef();
  const workCon3Ref = useRef();
  const viewAllWorksRef = useRef();

  const { isLoadingComplete } = useContext(NavColourContext);

  useEffect(() => {
    if (isLoadingComplete) {
      const worksObserver1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap
                .timeline()
                .to(worksTitleRef.current, {
                  opacity: 1,
                  y: 0,
                })
                .to(
                  firstWorkRef.current,
                  {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    ease: "power3.out",
                  },
                  "<0.2"
                );
            }
          });
        },
        { threshold: 0.2 }
      );
      const worksObserver2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(secWorkRef.current, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power3.out",
              });
            }
          });
        },
        { threshold: 0.2 }
      );
      const worksObserver3 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(thirdWorkRef.current, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power3.out",
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      worksObserver1.observe(workCon1Ref.current);
      worksObserver2.observe(workCon2Ref.current);
      worksObserver3.observe(workCon3Ref.current);

      const viewAlWorksObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                ease: "power3.out",
              });
            }
          });
        },
        { threshold: 1 }
      );

      viewAlWorksObserver.observe(viewAllWorksRef.current);
    }
  }, [isLoadingComplete]);

  return (
    <section className="mt-10 text-white w-full flex flex-col">
      <p
        className={`${
          show ? "black" : "hidden"
        } text-black uppercase font-extrabold ml-3 mb-[1rem] text-[.8rem] opacity-0 translate-y-[100px]`}
        ref={worksTitleRef}
      >
        featured works
      </p>
      <div>
        <div
          className="w-full h-[20rem] md:h-[30rem] lg:h-screen lg:sticky lg:top-0 lg:z-[1]"
          ref={workCon1Ref}
        >
          <div
            className={`h-full relative flex items-end lg:items-center transition-all duration-[.5s] lg:duration-[.2s] ease-out ${styles.pos}`}
            ref={firstWorkRef}
          >
            <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
              <p className="text-[1rem] md:text-[1.2rem]">SeamlessPOS</p>
              <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
              <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
                Meet SeamlessPOS, a game-changer for restaurant and hospitality
                operations. This cutting-edge solution revolutionizes order and
                inventory management, providing a seamless experience. With a
                user-friendly design, SeamlessPOS empowers teams to handle
                orders, manage inventory, and deliver outstanding service in
                real-time.
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[20rem] md:h-[30rem] lg:h-screen my-4 lg:my-0 lg:sticky lg:top-0 lg:z-[2]"
          ref={workCon2Ref}
        >
          <div
            className={`h-full relative flex items-end lg:items-center transition-all duration-[.5s] lg:duration-[.2s] ease-out ${styles.eohs}`}
            ref={secWorkRef}
          >
            <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
              <p className="text-[1rem] md:text-[1.2rem]">EOHS</p>
              <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
              <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
                I created this App to help customers of any Online Shopping
                Platform to order and pay with their cryptocurrency with ease
                especially E-commerce products within Web2 to learn a little
                about Web3 because most people now trade with coins. Introducing
                this feature into the Web2 products will make the ordering
                process smooth and quick without the exchange of coins before
                any users can get stuff online.
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[20rem] md:h-[30rem] lg:h-screen lg:z-[3]"
          ref={workCon3Ref}
        >
          <div
            className={`h-full relative flex items-end lg:items-center ${styles.insta}`}
            ref={thirdWorkRef}
          >
            <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
              <p className="text-[1rem] lg:max-w-[7rem]">
                Instagram Mobile App Redesign
              </p>
              <p className="text-[1rem]">UI/UX DESIGN</p>
              <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
                Enhancing accessibility by allowing users to effortlessly drag
                and drop their preferred highlights without disruption.
                Introducing a seamless dropdown above the highlights, providing
                easy navigation through lists. Crafting an intuitive and
                interactive interface for a simplified user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/works"
        className={`${
          show ? "block" : "hidden"
        } uppercase text-black text-center text-[2rem] lg:text-[3rem] leading-[.9em] self-center mt-[4rem] lg:mt-[5rem] opacity-0 translate-y-[100px]`}
        ref={viewAllWorksRef}
      >
        view all <span className="block">works</span>
      </Link>
    </section>
  );
};

export default FeaturedWorks;
