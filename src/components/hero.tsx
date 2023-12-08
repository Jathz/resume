import { SignIn } from "@clerk/nextjs";
import React from "react";

function Hero() {
  return (
    <section className="z-0 flex h-[860px] w-full flex-col justify-evenly bg-cover pt-48 sm:pt-36 md:flex-row ">
      <div className="relative basis-3/4 lg:px-16">
        <h1 className="px-16 pb-4 pt-16 text-left text-6xl font-bold text-black">
          <span className="text-4xl font-bold text-white sm:text-7xl">
            Hi! 👋 I'm {" "}
          </span>
          <span className="bg-gradient-to-br from-[#5271ff] to-[#7989cf] bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            Jath
          </span>
          <span className="text-4xl font-bold text-white sm:text-7xl">
            . <br />Ultimate tech junkie 👨‍💻 <br />
          </span>
        </h1>
        <p className="px-16 text-lg text-gray-400 font-light pt-8">
          UNSW Engineering Science (Software Engineering) graduate with a knack
          for creative problem-solving. Eagerly pursuing challenging
          opportunities to learn, grow, and contribute innovative solutions.
        </p>
      </div>
      <div className="mx-auto basis-1/2">{/*<SignIn />*/}</div>
    </section>
  );
}

export default Hero;
