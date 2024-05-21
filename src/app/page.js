import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}

      <section className={`${styles.hero} text-white w-full mx-auto pb-3`}>
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

            <p className="max-w-full md:max-w-[40rem] lg:hidden my-[2rem] tracking-[.15em]">
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

      {/* ABOUT SECTION */}

      <section className="mt-[3.5rem]">
        <div
          className={`max-w-[16rem] ml-3 mb-[2rem] text-justify font-extrabold text-[.8rem] lg:hidden font-neueMontreal`}
        >
          <p className="text-right">
            I&apos;m Bello Taofeeqah, but you can call
          </p>
          me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting
          strategic solutions that drive product success.
        </div>
        <div className="lg:hidden flex flex-col w-full mx-auto items-end text-justify px-3 text-[5.5vw] font-editorialOld capitalize">
          <p>My skills encompass</p>
          <p className="max-w-full">
            extensive research, interface design, and wireframing. I&apos;m
            dedicated to continuous process improvement, sharing UX knowledge,
            and transforming intricate business concepts into visually
            captivating, user-centric designs.
          </p>
        </div>

        <div>
          <div className="hidden font-editorialOld max-w-[98%] p-2 text-[3.9vw] text-justify mx-auto capitalize lg:flex flex-col flex-wrap gap-4">
            <div className="flex justify-between mb-[-2rem]">
              <div
                className={`max-w-[16rem] ml-3 mb-[2rem] text-justify font-extrabold text-[.8rem] font-neueMontreal`}
              >
                <p className="text-right">
                  I&apos;m Bello Taofeeqah, but you can call
                </p>
                me Pheeqoh. As an experienced Product/UX Designer, I excel in
                crafting strategic solutions that drive product success.
              </div>

              <p className="inline-block text-right">
                My skills encompass extensive research,
              </p>
            </div>

            <p>
              interface design, and wireframing. I&apos;m dedicated to
              continuous process improvement, sharing UX knowledge, and
              transforming intricate business concepts into visually
              captivating, user- centric designs.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:items-end lg:justify-end gap-2 lg:gap-7 mt-[2rem] w-full mx-auto px-2">
          <div className="lg:order-2">
            <Image
              src="/images/pheeqohfan.png"
              alt="taofeeqoh image holding a fan"
              width={500}
              height={500}
            />
          </div>
          <Link
            href="/about"
            className="uppercase self-end text-[1.5rem] font-bold lg:order-1"
          >
            know more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
