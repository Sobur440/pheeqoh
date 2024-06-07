"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useContext, useEffect, useRef } from "react";
import styles from "./shared.module.css";
import Link from "next/link";
import { NavColourContext } from "@/contexts/NavColourContext";
import FeaturedWorks from "@/components/FeaturedWorks";
import ReachOut from "@/components/ReachOut";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Home = () => {
  const aboutRef = useRef([]);
  const aboutContainerRef = useRef();
  const aboutParaRef = useRef([]);
  const aboutLineRef = useRef();
  const aboutImgRef = useRef();
  const knowMoreRef = useRef();
  const imgConRef = useRef();
  const heroRef = useRef([]);
  const nameContainerRef = useRef();
  const heroParagraphRef = useRef([]);
  const { setNavColour, navRef, isLoadingComplete, setRoute } =
    useContext(NavColourContext);
  const pathname = usePathname();
  setNavColour(true);
  const show = true;

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    if (isLoadingComplete) {
      gsap
        .timeline()
        .to(heroRef.current, {
          y: 0,
          stagger: { each: 0.2 },
          duration: 1,
          ease: "power3.out",
        })
        .to(
          nameContainerRef.current,
          {
            overflow: "visible",
            duration: 0.3,
          },
          "-=1.2"
        )
        .to(
          heroParagraphRef.current,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            y: 0,
            ease: "power3.out",
          },
          "-=2.5"
        );
    }
  }, [isLoadingComplete]);

  useEffect(() => {
    // gsap
    //   .timeline()
    //   .to(heroRef.current, {
    //     y: 0,
    //     stagger: { amount: 1 },
    //     duration: 1,yarn
    //   })
    //   .set(nameContainerRef.current, {
    //     overflow: "visible",
    //   })
    //   .to(
    //     heroParagraphRef.current,
    //     {
    //       clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap
              .timeline()
              .to(aboutRef.current, {
                y: 0,
                stagger: { amount: 0.5 },
                ease: "power2.out",
                opacity: 1,
                duration: 1.2,
              })
              .to(
                `.${styles.about}, .${styles.aboutBlack}, .${styles.aboutMobile}`,
                {
                  width: "100%",
                  stagger: { amount: 0.5 },
                  ease: "power2.out",
                  duration: 1.3,
                },
                "<0.5"
              )
              .to(
                aboutParaRef.current,
                {
                  y: 0,
                  opacity: 1,
                  ease: "power3.out",
                  duration: 1.5,
                },
                "<0.5"
              );
          }
        });
      },
      { threshold: 0.3 }
    );
    aboutObserver.observe(aboutContainerRef.current);

    const aboutImgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap
              .timeline()
              .to(aboutImgRef.current, {
                ease: "power3.out",
                duration: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              })
              .to(knowMoreRef.current, {
                opacity: 1,
              });
          }
        });
      },
      { threshold: 0.3 }
    );

    aboutImgObserver.observe(imgConRef.current);
  }, []);

  return (
    <>
      {/* HERO SECTION */}

      <section className={`${styles.hero} text-white w-full mx-auto pb-3`}>
        <div className="w-[95%] mx-auto h-full flex flex-col justify-end">
          <div className="w-full h-[55%] md:h-[70%] flex flex-col justify-between items-center mx-auto">
            <div className="w-full font-ppEiko text-[20vw] md:text-[17vw] lg:text-[10vw] leading-[.8] lg:leading-none flex flex-col justify-end md:justify-start items-center h-[75%] gap-[2.5rem] md:gap-[3rem]">
              <div className="w-full flex flex-col">
                <div className="flex w-full mx-auto lg:justify-between">
                  <div className="uppercase block overflow-y-hidden">
                    <p
                      className="translate-y-[100%]"
                      ref={(el) => heroRef.current.push(el)}
                    >
                      be<span className="italic">l</span>lo
                    </p>
                  </div>
                  <p
                    className="hidden lg:block font-neueMontreal text-[1rem] leading-[1.4em] text-justify max-w-[25rem] translate-y-[100%]"
                    ref={(el) => heroParagraphRef.current.push(el)}
                    style={{
                      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                      transition: "1s ease-out",
                    }}
                  >
                    I&apos;m a change-making Product/UX designer with 2 years
                    experience in fintech, SaaS, management, e-commerce, and
                    blockchain. I&apos;m passionate about creating meaningful
                    experiences that address real-world problems.
                  </p>
                </div>
                <div
                  className="lg:self-end overflow-y-hidden"
                  ref={nameContainerRef}
                >
                  <div
                    className="flex flex-col lg:flex-row uppercase translate-y-[100%]"
                    ref={(el) => heroRef.current.push(el)}
                  >
                    <p className="self-center lg:self-start">
                      ta
                      <span className="italic lg:mr-[1rem] -m-[.7rem] md:-ml-[1.2rem]">
                        o
                      </span>
                    </p>
                    <p className="self-end lg:self-start">
                      (feeq<span className="italic">a</span>h)
                    </p>
                  </div>
                </div>
              </div>
              <p
                className="max-w-full md:max-w-[40rem] font-extralight font-neueMontreal lg:hidden text-[2.8vw] md:text-[1rem] leading-[1.2em] tracking-[.13em] translate-y-[100%]"
                ref={(el) => heroParagraphRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  transition: "1s ease-out",
                }}
              >
                Change-making Product/UX designer with 2 years experience in
                fintech, SaaS, management, e-commerce, and blockchain.
              </p>
            </div>

            <div className="w-full flex justify-center lg:justify-between text-[.8rem] overflow-y-hidden">
              <p
                className="uppercase hidden lg:block translate-y-[100%]"
                ref={(el) => heroRef.current.push(el)}
              >
                &copy;{new Date().getFullYear()} bello taofeeqah
              </p>
              <p
                className="uppercase translate-y-[100%]"
                ref={(el) => heroRef.current.push(el)}
              >
                scroll down
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="my-[4rem]" ref={aboutContainerRef}>
        <div
          className={`max-w-[63%] md:max-w-[36rem] ml-3 mb-[3rem] text-justify text-[1rem] md:text-[3vw] lg:hidden font-neueMontreal translate-y-[100px] opacity-0`}
          ref={(el) => aboutParaRef.current.push(el)}
        >
          <p className="text-right">
            I&apos;m Bello Taofeeqah, but you can call
          </p>
          me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting
          strategic solutions that drive product success.
        </div>
        <div className="lg:hidden flex flex-col w-full mx-auto text-justify px-3 text-[8vw] font-editorialOld capitalize">
          <div className={`relative w-full text-right overflow-y-hidden`}>
            <p
              className="translate-y-[100%]"
              ref={(el) => aboutRef.current.push(el)}
            >
              My skills encompass
            </p>
            <div className={`${styles.aboutMobile}`}></div>
          </div>
          <div className="w-full text-[7.4vw] leading-[1.5em]">
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                extensive research, interface
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                design, and wireframing. I&apos;m
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                dedicated to continuous process
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                improvement, sharing UX
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>{" "}
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                knowledge, and transforming
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                intricate business concepts into
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
            <div className={`block w-full relative overflow-y-hidden`}>
              <p
                className={`${styles.aboutWordsMobile} translate-y-[100%]`}
                ref={(el) => aboutRef.current.push(el)}
              >
                visually captivating, user-
              </p>
              <div className={`${styles.aboutMobile}`}></div>
            </div>
          </div>
          <div className={`w-fit relative`}>
            <p
              className={`${styles.aboutWordsMobile} translate-y-[100%]`}
              ref={(el) => aboutRef.current.push(el)}
            >
              centric designs.
            </p>
            <div className={`${styles.aboutMobile}`}></div>
          </div>
        </div>

        <div>
          <div className="hidden font-editorialOld max-w-[98%] p-2 text-[3.8vw] xl:text-[3.9vw] text-justify mx-auto capitalize lg:flex flex-col flex-wrap gap-4">
            <div className={`relative flex justify-between mb-[-1rem] w-full`}>
              <div
                className={`max-w-[20rem] ml-3 xl:mb-[2rem] lg:mb-[3rem] text-justify text-[1rem] font-neueMontreal translate-y-[100px] opacity-0`}
                ref={(el) => aboutParaRef.current.push(el)}
              >
                <p className="text-right">
                  I&apos;m Bello Taofeeqah, but you can call
                </p>
                me Pheeqoh. As an experienced Product/UX Designer, I excel in
                crafting strategic solutions that drive product success.
              </div>

              <div className="inline-block overflow-y-hidden text-right xl:mt-[2rem] lg:mt-[4.5rem]">
                <p
                  className="translate-y-[100%]"
                  ref={(el) => aboutRef.current.push(el)}
                >
                  My skills encompass extensive research,
                </p>
              </div>

              <div className={`${styles.aboutBlack}`}></div>
            </div>

            <div>
              <div className={`block w-full relative overflow-y-hidden`}>
                <p
                  className={`${styles.aboutWords} translate-y-[100%]`}
                  ref={(el) => aboutRef.current.push(el)}
                >
                  interface design, and wireframing. I&apos;m dedicated to
                  continuous
                </p>
                <div className={`${styles.about}`}></div>
              </div>
              <div className={`block w-full relative overflow-y-hidden`}>
                <p
                  className={`${styles.aboutWords} translate-y-[100%]`}
                  ref={(el) => aboutRef.current.push(el)}
                >
                  process improvement, sharing UX knowledge, and transforming
                </p>
                <div className={`${styles.about}`}></div>
              </div>
              <div className={`block w-full relative overflow-y-hidden`}>
                <p
                  className={`${styles.aboutWords} translate-y-[100%]`}
                  ref={(el) => aboutRef.current.push(el)}
                >
                  intricate business concepts into visually captivating, user-
                </p>
                <div className={`${styles.about}`}></div>
              </div>
              <div className={`block relative w-fit overflow-y-hidden`}>
                <p
                  className={`${styles.aboutWords} translate-y-[100%]`}
                  ref={(el) => aboutRef.current.push(el)}
                >
                  centric designs.
                </p>
                <div className={`${styles.about}`}></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row items-end lg:justify-end gap-2 lg:gap-7 mt-[4rem] lg:mt-[2rem] w-full mx-auto px-3 overflow-y-hidden"
          ref={imgConRef}
        >
          <div
            className="lg:order-2 flex justify-end h-fit items-end pb-[.65rem]"
            ref={aboutImgRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              transition: ".5s ease-out",
            }}
          >
            <img
              src="/images/pheeqohfan.png"
              alt="taofeeqoh image holding a fan"
              className="w-[60%] md:w-[30rem] cover"
            />
          </div>
          <Link
            href="/about"
            className="flex uppercase text-[1.9rem] lg:order-1 opacity-0"
            ref={knowMoreRef}
          >
            know more
          </Link>
        </div>
      </section>

      {/* FEATURED WORKS SECTION */}

      <FeaturedWorks show={show} />

      {/* REACHOUT */}

      <ReachOut />
    </>
  );
};

export default Home;
