import React from "react";
import Image from "next/image";
//import Link from "next/link";
import { useInView } from "react-intersection-observer";

import Img1 from "../../public/icon-512x512.png";
import Img2 from "../../public/pexels-photo-546819.jpeg";
import aec from "../../public/aec.jpg";
import dhm from "../../public/dhm.jpg";
import nswec from "../../public/nswec.png";
import ej from "../../public/ej.png";

type StaticImageData = typeof Img1;

interface TimelineItemProps {
  src: StaticImageData;
  alt: string;
  date: string;
  title: string;
  description: Array<string>;
  side: string;
}

function TimelineItem({
  src,
  alt,
  date,
  title,
  description,
  side,
}: TimelineItemProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    //triggerOnce: true,
  });

  const isRightSide = side === "right";

  return (
    <div
      ref={ref}
      className={`relative z-10 transform opacity-0 transition-all duration-500 ${
        inView ? 'opacity-100 translate-x-0' : `${isRightSide ? 'translate-x-10' : '-translate-x-10' }`
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className={`absolute h-24 w-24 rounded-full border-4 border-white object-cover shadow-md md:left-0 md:right-0 md:mx-auto ${isRightSide ? 'right-0' : 'left-0'}`}
      />
      <div className={`pl-28 pt-0 relative md:w-1/2  ${isRightSide ? 'left-auto md:ml-auto md:pl-16' : 'right-auto md:mr-auto md:ml-0 md:pl-0 md:pr-16'}`}>
        <div className="cursor-pointer rounded-md p-6 shadow-xl backdrop-blur-md hover:shadow-2xl">
          <span className="text-sm font-bold tracking-wide text-indigo-600">
            {date}
          </span>
          <h1 className="pt-1 text-2xl font-bold text-white">{title} </h1>
          <div className="mt-4 pl-4 pt-1 text-gray-400">
            <ul className="list-disc">
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
              {/* Add more list items here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const description1 = [
    "Utilising the T3 stack, incorporating Next.js, TypeScript, Prisma, and Tailwind CSS to develop dynamic web applications with robust code, efficient databases, and appealing interfaces.",
    "Resolving GitHub issues with systematic branch management, optimising development workflows and code quality.",
    "Integrating AI APIs, enhancing software functionality with natural language processing and predictive analytics.",
    "Consistently delivering visually appealing, responsive user interfaces by combining technical skills with user-centric design principles.",
    "Collaborating within teams, fostering success through open communication and the integration of diverse perspectives to achieve shared objectives.",
  ];

  const description2 = [
    "Educating students beginner to intermediate programming and problem solving skills, breaking down how to solve complex exercises in high level languages such as Python.",
    "Educating Students on programming, including; C, Python, HTML and more.",
    "Managing complex exercises in programming high level languages.",
    "Providing expert advice and recommendations on best practice for students on problem solving.",
    "Responsible for managing student development and growth.",
    "Coordinated language work flows for all students and processes, contributing to the success of activities and programs.",
    "Instructing students on the processes for web development.",
    "Cultivating a foundation of learning and success in programming.",
  ];

  const description3 = [
    "Delivery, liased with office coordinate office assistants to ensure appropriate number of accurate materials.",
    "Use software to keep track of materials.",
    "Organised all returns.",
    "Ensured quality assurance by liaising with multiple teams to cross  check votes due to the electorate being classified as closely contested.",
    "Communicated with team members to ensure an efficient election process.",
  ];

  const description4 = [
    "Communicated with pathologist and cut up staff to create highly detailed reports on patient biopsies for doctors.",
    "Worked with highly specialised software and macros to complete reports quickly and accurately.",
  ];

  const description5 = [
    "Ensured quality assurance by liaising with multiple teams to cross  check votes due to the electorate being classified as closely contested.",
    "Communicated with team members to ensure an efficient election process."
  ];

  const description6 = [
    "Calculated cost of jewellery daily based on current gold prices.",
    "Worked with a database system for jewellery, purchases, and repairs."
  ]

  return (
    <section className="text-gray-800 antialiased">
      <div className="container relative mx-auto flex flex-col space-y-8 px-6">
        <div className="left-17 absolute inset-0 z-0 h-auto mt-8 mb-8 w-2 bg-white shadow-md md:left-0 md:right-0 md:mx-auto"></div>
        <TimelineItem
          src={Img1}
          alt="Image 1"
          date="Aug 2023 - Current"
          title="Full Stack Engineer @ Pllun"
          description={description1}
          side="right"
        />
        <TimelineItem
          src={Img2}
          alt="Image 2"
          date="May 2022 - Current"
          title="Programming Tutor"
          description={description2}
          side="left"
        />
        <TimelineItem
          src={nswec}
          alt="Image 3"
          date="Mar 2023 - May 2023"
          title="Senior Office Assistant Election Material @ NSWEC"
          description={description3}
          side="right"
        />
        <TimelineItem
          src={dhm}
          alt="Image 3"
          date="May 2022 - Dec 2022"
          title="Histopathology Typist @ Douglass Hanly Moir Pathology"
          description={description4}
          side="left"
        />
        <TimelineItem
          src={aec}
          alt="Image 3"
          date="2016"
          title="Polling Assistant @ AEC"
          description={description5}
          side="right"
        />
        <TimelineItem
          src={ej}
          alt="Image 3"
          date="Nov 2014 - Mar 2015"
          title="Customer Service Executive @ Excellent Jewellers"
          description={description6}
          side="left"
        />
      </div>
    </section>
  );
}

export default Timeline;

