import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const posRef = useRef();
  const posTitleRef = useRef([]);
  const posParaRef = useRef();
  const eohsRef = useRef();
  const eohsTitleRef = useRef([]);
  const eohsParaRef = useRef();
  const instaRef = useRef();
  const instaTitleRef = useRef([]);
  const instaParaRef = useRef();
  const exploreRef = useRef([]);

  const viewAllWorksRef = useRef();

  const { isLoadingComplete } = useContext(NavColourContext);
  const [movementX, setMovementX] = useState(0);
  const [movementY, setMovementY] = useState(0);
  const [exploreBtn, setExploreBtn] = useState(false);
  const [secExploreBtn, setSecExploreBtn] = useState(false);
  const [thirdExploreBtn, setThirdExploreBtn] = useState(false);

  useEffect(() => {
    gsap.to(exploreRef.current, {
      left: `${movementX}px`,
      top: `${movementY}px`,
    });
  }, [movementX, movementY]);

  useEffect(() => {
    if (isLoadingComplete) {
      // const worksObserver1 = new IntersectionObserver(
      //   (entries) => {
      //     entries.forEach((entry) => {
      //       if (entry.isIntersecting) {
      //         gsap
      //           .timeline()
      //           .to(worksTitleRef.current, {
      //             opacity: 1,
      //             y: 0,
      //           })
      //           .to(
      //             firstWorkRef.current,
      //             {
      //               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //               ease: "power3.out",
      //             },
      //             "<0.2"
      //           );
      //       }
      //     });
      //   },
      //   { threshold: 0.2 }
      // );
      // const worksObserver2 = new IntersectionObserver(
      //   (entries) => {
      //     entries.forEach((entry) => {
      //       if (entry.isIntersecting) {
      //         gsap.to(secWorkRef.current, {
      //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //           ease: "power3.out",
      //         });
      //       }
      //     });
      //   },
      //   { threshold: 0.2 }
      // );
      // const worksObserver3 = new IntersectionObserver(
      //   (entries) => {
      //     entries.forEach((entry) => {
      //       if (entry.isIntersecting) {
      //         gsap.to(thirdWorkRef.current, {
      //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //           ease: "power3.out",
      //         });
      //       }
      //     });
      //   },
      //   { threshold: 0.2 }
      // );

      // worksObserver1.observe(workCon1Ref.current);
      // worksObserver2.observe(workCon2Ref.current);
      // worksObserver3.observe(workCon3Ref.current);

      const posObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap
                .timeline()
                .to(posTitleRef.current, {
                  y: 0,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                  stagger: { amount: 0.5 },
                })
                .to(posParaRef.current, {
                  opacity: 1,
                  y: 0,
                });
            }
          });
        },
        { threshold: 0.2 }
      );
      const eohsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap
                .timeline()
                .to(eohsTitleRef.current, {
                  y: 0,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                  stagger: { amount: 0.5 },
                })
                .to(eohsParaRef.current, {
                  opacity: 1,
                  y: 0,
                });
            }
          });
        },
        { threshold: 0.2 }
      );
      const instaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap
                .timeline()
                .to(instaTitleRef.current, {
                  y: 0,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                  stagger: { amount: 0.5 },
                })
                .to(instaParaRef.current, {
                  opacity: 1,
                  y: 0,
                });
            }
          });
        },
        { threshold: 0.2 }
      );

      posObserver.observe(posRef.current);
      eohsObserver.observe(eohsRef.current);
      instaObserver.observe(instaRef.current);

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

  // const mouseMovement = {
  //   x: null,
  //   y: null,
  // };

  const explore = (e) => {
    setMovementX(e.clientX);
    setMovementY(e.clientY);
    setExploreBtn(true);
  };
  const secExplore = (e) => {
    setMovementX(e.clientX);
    setMovementY(e.clientY);
    setSecExploreBtn(true);
  };
  const thirdExplore = (e) => {
    setMovementX(e.clientX);
    setMovementY(e.clientY);
    setThirdExploreBtn(true);
  };

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
        <div className="h-screen sticky top-0 z-[1]" ref={workCon1Ref}>
          <div
            className={`${styles.pos} h-full flex items-center lg:hidden relative`}
          >
            <div className="w-[95%] h-[10rem] mx-auto flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <p>SeamlessPos</p>
                <p>UI/UX DESIGN</p>
              </div>
              <div>
                <a
                  href="https://www.behance.net/gallery/181810595/SeamlessPOS-case-study"
                  target="_blank"
                  className="underline capitalize"
                >
                  view project
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.behance.net/gallery/181810595/SeamlessPOS-case-study"
            target="_blank"
            className={`h-full relative hidden lg:flex items-end lg:items-center transition-all duration-[.5s] lg:duration-[.2s] ease-out ${styles.pos}`}
            ref={firstWorkRef}
            onMouseMove={explore}
            onMouseOut={() => setExploreBtn(false)}
          >
            <div
              className={`${
                exploreBtn ? "opacity-[1]" : "opacity-0"
              } absolute w-[7.5rem] font-extralight text-[1rem] h-[1.5rem] hidden lg:flex justify-center items-center transition-all duration-[.5s] ease-out bg-[gray] `}
              ref={(el) => exploreRef.current.push(el)}
            >
              Click to explore
            </div>
            <div
              className="w-[90%] h-full mx-auto flex justify-between items-center mb-4 lg:mb-0"
              ref={posRef}
            >
              <p
                className="text-[1rem] md:text-[1.2rem] translate-y-[200px]"
                ref={(el) => posTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                SeamlessPOS
              </p>
              <p
                className="text-[1rem] md:text-[1.2rem] translate-y-[200px]"
                ref={(el) => posTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                UI/UX DESIGN
              </p>
              <p
                className="hidden lg:block max-w-[25rem] text-justify text-[.9rem] opacity-0 translate-y-[100px]"
                ref={posParaRef}
              >
                Meet SeamlessPOS, a game-changer for restaurant and hospitality
                operations. This cutting-edge solution revolutionizes order and
                inventory management, providing a seamless experience. With a
                user-friendly design, SeamlessPOS empowers teams to handle
                orders, manage inventory, and deliver outstanding service in
                real-time.
              </p>
            </div>
          </a>
        </div>

        <div className="h-screen sticky top-0 z-[2]" ref={workCon2Ref}>
          <div
            className={`${styles.eohs} h-full flex items-center lg:hidden relative`}
          >
            <div className="w-[95%] h-[10rem] mx-auto flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <p>EOHS</p>
                <p>UI/UX DESIGN</p>
              </div>
              <div>
                <a
                  href="https://www.behance.net/gallery/160295759/EHOS"
                  target="_blank"
                  className="underline capitalize"
                >
                  view project
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.behance.net/gallery/160295759/EHOS"
            target="_blank"
            className={`h-full relative hidden lg:flex items-end lg:items-center transition-all duration-[.5s] lg:duration-[.2s] ease-out ${styles.eohs}`}
            ref={secWorkRef}
            onMouseMove={secExplore}
            onMouseOut={() => setSecExploreBtn(false)}
          >
            <div
              className={`${
                secExploreBtn ? "opacity-[1]" : "opacity-0"
              } absolute w-[7.5rem] font-extralight text-[1rem] h-[1.5rem] hidden lg:flex justify-center items-center transition-all duration-[.5s] ease-out bg-[gray] `}
              ref={(el) => exploreRef.current.push(el)}
            >
              Click to explore
            </div>
            <div
              className="w-[90%] h-full mx-auto flex justify-between items-center mb-4 lg:mb-0"
              ref={eohsRef}
            >
              <p
                className="text-[1rem] md:text-[1.2rem] translate-y-[200px]"
                ref={(el) => eohsTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                EOHS
              </p>
              <p
                className="text-[1rem] md:text-[1.2rem] translate-y-[200px]"
                ref={(el) => eohsTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                UI/UX DESIGN
              </p>
              <p
                className="hidden lg:block max-w-[25rem] text-justify text-[.9rem] opacity-0 translate-y-[100px]"
                ref={eohsParaRef}
              >
                I created this App to help customers of any Online Shopping
                Platform to order and pay with their cryptocurrency with ease
                especially E-commerce products within Web2 to learn a little
                about Web3 because most people now trade with coins. Introducing
                this feature into the Web2 products will make the ordering
                process smooth and quick without the exchange of coins before
                any users can get stuff online.
              </p>
            </div>
          </a>
        </div>

        <div className="h-screen sticky z-[3]" ref={workCon3Ref}>
          <div
            className={`${styles.insta} h-full flex items-center lg:hidden relative`}
          >
            <div className="w-[95%] h-[10rem] mx-auto flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <p className="max-w-[60rem]">Instagram Mobile App Redesign</p>
                <p>UI/UX DESIGN</p>
              </div>
              <div>
                <a
                  href="https://www.behance.net/gallery/146653785/Instagrams-Mobile-App-Redesign"
                  target="_blank"
                  className="underline capitalize"
                >
                  view project
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.behance.net/gallery/146653785/Instagrams-Mobile-App-Redesign"
            target="_blank"
            className={`h-full relative hidden lg:flex items-end lg:items-center ${styles.insta}`}
            ref={thirdWorkRef}
            onMouseMove={thirdExplore}
            onMouseOut={() => setThirdExploreBtn(false)}
          >
            <div
              className={`${
                thirdExploreBtn ? "opacity-[1]" : "opacity-0"
              } absolute w-[7.5rem] font-extralight text-[1rem] h-[1.5rem] hidden lg:flex justify-center items-center transition-all duration-[.5s] ease-out bg-[gray] `}
              ref={(el) => exploreRef.current.push(el)}
            >
              Click to explore
            </div>
            <div
              className="w-[90%] h-full mx-auto flex justify-between items-center mb-4 lg:mb-0"
              ref={instaRef}
            >
              <p
                className="text-[1rem] lg:max-w-[7rem] translate-y-[200px]"
                ref={(el) => instaTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                Instagram Mobile App Redesign
              </p>
              <p
                className="text-[1rem] translate-y-[200px]"
                ref={(el) => instaTitleRef.current.push(el)}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  transition: ".5s ease-out",
                }}
              >
                UI/UX DESIGN
              </p>
              <p
                className="hidden lg:block max-w-[25rem] text-justify text-[.9rem] opacity-0 translate-y-[100px]"
                ref={instaParaRef}
              >
                Enhancing accessibility by allowing users to effortlessly drag
                and drop their preferred highlights without disruption.
                Introducing a seamless dropdown above the highlights, providing
                easy navigation through lists. Crafting an intuitive and
                interactive interface for a simplified user experience.
              </p>
            </div>
          </a>
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
