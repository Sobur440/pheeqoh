import Link from "next/link";
import React from "react";
import styles from "../app/shared.module.css";

const FeaturedWorks = () => {
  return (
    <section className="mt-10 text-white w-full flex flex-col">
      <p className="text-black uppercase font-extrabold ml-3 mb-2 text-[.8rem]">
        featured works
      </p>
      <div
        className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center ${styles.pos}`}
      >
        <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
          <p className="text-[1rem] md:text-[1.2rem]">SeamlessPOS</p>
          <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
          <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
            Meet SeamlessPOS, a game-changer for restaurant and hospitality
            operations. This cutting-edge solution revolutionizes order and
            inventory management, providing a seamless experience. With a
            user-friendly design, SeamlessPOS empowers teams to handle orders,
            manage inventory, and deliver outstanding service in real-time.
          </p>
        </div>
      </div>

      <div
        className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center my-4 lg:my-0 ${styles.eohs}`}
      >
        <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
          <p className="text-[1rem] md:text-[1.2rem]">EOHS</p>
          <p className="text-[1rem] md:text-[1.2rem]">UI/UX DESIGN</p>
          <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
            I created this App to help customers of any Online Shopping Platform
            to order and pay with their cryptocurrency with ease especially
            E-commerce products within Web2 to learn a little about Web3 because
            most people now trade with coins. Introducing this feature into the
            Web2 products will make the ordering process smooth and quick
            without the exchange of coins before any users can get stuff online.
          </p>
        </div>
      </div>

      <div
        className={`w-full h-[20rem] md:h-[30rem] lg:h-screen relative flex items-end lg:items-center ${styles.insta}`}
      >
        <div className="w-[90%] mx-auto flex justify-between mb-4 lg:mb-0">
          <p className="text-[1rem] lg:max-w-[7rem]">
            Instagram Mobile App Redesign
          </p>
          <p className="text-[1rem]">UI/UX DESIGN</p>
          <p className="hidden lg:block max-w-[25rem] text-justify text-[.9rem]">
            Enhancing accessibility by allowing users to effortlessly drag and
            drop their preferred highlights without disruption. Introducing a
            seamless dropdown above the highlights, providing easy navigation
            through lists. Crafting an intuitive and interactive interface for a
            simplified user experience.
          </p>
        </div>
      </div>

      <Link
        href="/works"
        className="block uppercase text-black text-center text-[2rem] lg:text-[3rem] leading-[.9em] self-center mt-10"
      >
        view all <span className="block">works</span>
      </Link>
    </section>
  );
};

export default FeaturedWorks;
