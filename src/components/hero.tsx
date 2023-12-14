//import { SignIn } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

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
    <section className="z-0 flex h-[860px] w-full flex-col justify-evenly bg-cover pt-48 sm:pt-36 md:flex-row">
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
      </div>
      <div className="mx-auto basis-1/2">{/*<SignIn />*/}</div>
    </section>
  );
}

export default Hero;
