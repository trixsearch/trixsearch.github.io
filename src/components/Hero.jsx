/*
@copyright 2024 trixsearch
@license Apache-2.0
*/

import React from "react";

import { ButtonPrimary, ButtonOutLine } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div
        className="container lg:grid lg:grid-cols-2
            items-center lg:gap-10"
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="trixsearch Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span
                className="relative w-2 h-2
                            rounded-full bg-emerald-400"
              >
                <span
                  className="absolute inset-0
                                rounded-full  bg-emerald-400 animate-ping"
                ></span>
              </span>
              Available For Work
            </div>
          </div>
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch]
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            Building Scalable Modern WebApps for the Future
          </h2>
          <div className=" flex items-center gap-3">
            <ButtonPrimary
              label={"Download Abhinav's CV"}
              icon="download"
              href="https://raw.githubusercontent.com/trixsearch/trixsearch.github.io/4a9155ca740a29a4eb935d9d01ac7ec88c78fe70/resume.pdf"
              // https://raw.githubusercontent.com/trixsearch/trixsearch.github.io/4a9155ca740a29a4eb935d9d01ac7ec88c78fe70/resume.pdf
            />

            <ButtonOutLine
              href="#about"
              label="Scroll down"
              icon={"arrow_downward"}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40
                to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/trixpic.png"
              alt=""
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
