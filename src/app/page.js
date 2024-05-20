import React from "react";
import styles from "./hero.module.css";

const Home = () => {
  return (
    <section className={`${styles.hero} text-white w-full mx-auto`}>
      <div className="w-[95%] mx-auto h-full flex flex-col justify-end">
        <div className="w-full h-[55%] md:h-[70%] flex flex-col justify-between items-center mx-auto">
          <div className="w-full font-ppEiko text-[17vw] md:text-[17vw] lg:text-[10vw] leading-[.8] lg:leading-none flex flex-col items-center">
            <div className="flex w-full mx-auto lg:justify-between">
              <p className="uppercase">
                be<span className="italic">l</span>lo
              </p>
              <p className="hidden lg:block font-neueMontreal text-[1rem] leading-[1.4em] text-justify max-w-[25rem]">
                I&apos;m a change-making Product/UX designer with 2 years
                experience in fintech, SaaS, management, e-commerce, and
                blockchain. I&apos;m passionate about creating meaningful
                experiences that address real-world problems.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row uppercase lg:self-end">
              <p className="self-center lg:self-start">
                ta<span className="italic">o</span>
              </p>
              <p>(feeqah)</p>
            </div>
          </div>

          <p className="max-w-full lg:hidden my-[2rem] tracking-[.15em]">
            Change-making Product/UX designer with 2 years experience in
            fintech, SaaS, management, e-commerce, and blockchain.
          </p>

          <div className="w-full flex justify-center lg:justify-between text-[.8rem]">
            <p className="uppercase hidden lg:block">
              &copy;{new Date().getFullYear()} bello taofeeqah
            </p>
            <p className="uppercase">scroll down</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
