import { SignIn } from "@clerk/nextjs";
import React from "react";

function Hero() {
  return (
    <section className="flex h-[860px] w-full flex-col justify-evenly bg-[url('https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover pt-48 md:flex-row sm:pt-36 z-0">
      <div className="relative basis-1/2 lg:px-16">
        <h1 className="px-16 pb-4 pt-16 text-center text-6xl font-bold text-white">
          Fullstack Enginner <br />{" "}
          <span className="bg-gradient-to-br from-[#5271ff] to-[#7989cf] bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            Jathurson Subachandran
          </span>
        </h1>
        <p className="px-16 text-lg text-white">
          UNSW Graduate with a knack
          for creative problem-solving.
        </p>
      </div>
      <div className="mx-auto basis-1/2">
        <SignIn />
      </div>
    </section>
  );
}

export default Hero;
