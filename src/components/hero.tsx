import React, { useState, useEffect } from "react";
import Image from "next/image";
import Ame from "../../public/Ame.png";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
import Link from "next/link";

function Hero() {
  const [wave, setWave] = useState<boolean>(false);
  const [waveCount, setWaveCount] = useState<number>(0);

  const [typedText, setTypedText] = useState("");
  const textToType =
    "UNSW Engineering Science (Software Engineering) graduate with a knack for creative problem-solving. Eagerly pursuing challenging opportunities to learn, grow, and contribute innovative solutions.";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30; // Adjust typing speed here (in milliseconds)
    let currentString = "";

    const typeText = () => {
      if (currentIndex < textToType.length) {
        currentString = currentString + textToType[currentIndex];
        setTypedText(currentString);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
  }, [textToType]);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setWave((prevWave) => {
        if (waveCount >= 4) {
          clearInterval(waveInterval); // Stop the waving after 5 times
          return prevWave;
        }
        setWaveCount((prevCount) => prevCount + 1);
        return !prevWave;
      });
    }, 500); // Change the interval as needed (milliseconds)

    return () => clearInterval(waveInterval);
  }, [waveCount]);

  return (
    <section className="z-0 mb-28 flex h-full w-full flex-col justify-evenly bg-cover pt-40 sm:pt-28 md:flex-row">
      <div className="relative basis-3/4 lg:px-16">
        <h1 className="px-16 pb-4 pt-16 text-left text-6xl font-bold text-black">
          <span className="text-4xl font-bold text-white sm:text-7xl">
            Hi!{" "}
            <span
              role="img"
              aria-label="Wave"
              style={{
                display: "inline-block",
                transform: wave ? "rotate(-20deg)" : "rotate(20deg)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              👋
            </span>{" "}
            I'm{" "}
          </span>
          <span className="bg-gradient-to-br from-[#5271ff] to-[#7989cf] bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            Jath
          </span>
          <span className="text-4xl font-bold text-white sm:text-7xl">
            . <br />
            Ultimate tech junkie 👨‍💻 <br />
          </span>
        </h1>
        <p className="px-16 pt-8 text-lg font-light text-gray-400">
          {typedText}
        </p>
        <div className="my-10 flex flex-row items-center justify-center gap-10 ">
          <Link href={"https://github.com/Jathz"}>
            <AiOutlineGithub
              size={50}
              className="transform cursor-pointer text-gray-50 transition duration-500 hover:scale-125 hover:text-red-400"
            />
          </Link>
          <Link
            href={
              "https://www.youtube.com/channel/UCJ2Hu96W2ecIvh94t4ZWX8g/videos"
            }
          >
            <AiOutlineYoutube
              size={50}
              className="transform cursor-pointer text-gray-50 transition duration-500 hover:scale-125 hover:text-red-400"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/jathurson/"}>
            <AiOutlineLinkedin
              size={50}
              className="transform cursor-pointer text-gray-50 transition duration-500 hover:scale-125 hover:text-red-400"
            />
          </Link>
          <Link href={"https://www.instagram.com/thedranmaster/"}>
            <AiOutlineInstagram
              size={50}
              className=" transform cursor-pointer text-gray-50 transition duration-500 hover:scale-125 hover:text-red-400"
            />
          </Link>
        </div>
      </div>
      <div className="mx-auto basis-1/2 items-center justify-center">
        <Image
          src={Ame}
          alt="Hi"
          width={250}
          height={250}
          className="h-96 w-auto rounded-xl shadow-2xl md:h-fit"
        />
      </div>
    </section>
  );
}

export default Hero;

/*<div className="mx-auto basis-1/2 items-center justify-center mt-5">
        <Image 
        src={Me}
        alt="Hi"
        width={500}
        height={500} 
        className="rounded-xl shadow-2xl"
        />

      </div>*/
