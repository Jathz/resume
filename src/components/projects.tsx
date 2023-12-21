import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import RPi from "../../public/rasberryPi.jpg";

const Projects = () => {
  const Project1 = [
    "BookHub",
    "React, Flask and PostgreSQL",
    "github.com/Jathz/Bookhub-JackJ",
    "A B2C e-commerce for indie e-books. Discover, buy, and share seamlessly, with personalized recommendations and a focus on supporting indie authors. Create private or public 'shelves,' organizing and rating books while fostering a vibrant community that celebrates independent authorship.",
    ""
];
  const Project2 = [
    "Arduino Led Controller",
    "C++, Arduino IDE",
    "",
    "Utilized Arduino IDE programming environment in C language, integrating library functions for efficient Input/Output operations. Implemented a meticulously wired breadboard configuration with an external power source to ensure optimal functionality and stability.",
    "Ame.png"
];
  const Project3 = [
    "Foodie",
    "Figma, Miro",
    "https://drive.google.com/file/d/1Cu4h7bA1xDrmINyAoCJHpnmExhNTrGHR/view?usp=sharing",
    "Welcome to Foodie, the perfect web app for food lovers! Foodie is a web app where you can find and share recipes with friends and family in group chats or individually. In this app you can sign up for a personalised account, choose recipes that you like or think others in your group may like and share them in a chat within the app itself.",
    ""
  ];
  const Project4 = [
    "Raspberry Pi Server",
    "Linux, Java, Networking",
    "",
    "Installed Arch Linux on a Raspberry Pi, followed by the setup and configuration of a robust game server infrastructure. Implemented precise port-forwarding and networking configurations to enable seamless operation for hosting and running a Minecraft server",
    "rasberryPi.jpg"
  ];

  const initialProjects = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project1,
    Project2,
    Project3,
    Project4,
  ];
  const [projectsData, setProjectsData] = useState<string[][]>(initialProjects);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (
        containerRef.current &&
        containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
      ) {
        // When scrolled to the right end, repeat the projects
        setProjectsData((prevProjects) => [
          ...prevProjects,
          ...initialProjects,
        ]);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", onScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", onScroll);
      }
    };
  }, [initialProjects]);

  return (
    <div ref={containerRef} className="no-scrollbar overflow-x-auto py-20">
      <div className="flex min-w-fit gap-5">
        {projectsData.map(
          (
            project,
            index /*
          <div
            key={index}
            className=" hover:scale-105 m-2 h-96 w-96 rounded-lg bg-indigo-500 bg-opacity-80 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
          >
            <div className="mt-5 text-left ml-5">
            <h1 className=" text-white pt-1 text-2xl font-bold">
            {project[0]}</h1>

            {project[1]}
            </div>
          </div>
        )*/,
          ) => (
                <div
            key={index}
            className=" hover:scale-105 m-2 h-128 w-80 rounded-lg bg-indigo-500 bg-opacity-80 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
          >
              <a href="#">
                <Image
                  className="rounded-t-lg w-96 h-36"
                  src={`/resume/public/${project[4]}`}
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project[0]}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project[1]}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project[3]}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
