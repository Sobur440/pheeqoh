import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[5rem] bg-black h-[40rem] lg:h-[40rem] md:h-[50rem] w-full text-white flex justify-center items-center">
      <div className="w-[98%] h-[96%] flex flex-col justify-between">
        <div className="h-[80%] w-full flex flex-col gap-[4rem] pt-[3rem]">
          <div className="text-[12vw] lg:text-[9.2vw] font-ppEiko uppercase flex leading-[1em] lg:justify-between flex-col lg:flex-row border-b border-white lg:border-none pb-[2rem] px-2">
            <p>
              be<span className="italic">l</span>lo
            </p>
            <p className="self-end">
              ta<span className="italic">o</span>feeq
              <span className="italic">a</span>h
            </p>
          </div>
          <div className="flex w-full lg:w-[60%] px-3 lg:self-end justify-between">
            <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-[13rem] capitalize">
              <div>
                <Link className="block" href="/">
                  home
                </Link>
                <Link className="block" href="/about">
                  about
                </Link>
                <Link className="block" href="/works">
                  works
                </Link>
                <Link className="block" href="/contact">
                  contact
                </Link>
              </div>
              <div>
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
            </div>
            <a href="#top" className="block uppercase text-[.8rem]">
              back to top
            </a>
          </div>
        </div>

        <div className="h-[10%] w-full flex px-2 justify-between items-center text-[.8rem] border-t border-white">
          <p className="uppercase">
            &copy;{new Date().getFullYear()} bello taofeeqah
          </p>
          <p className="uppercase">
            designed by
            <a
              target="_blank"
              href="https://qoreeb.vercel.app"
              className="ml-1"
            >
              qoreeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
