import React from "react";
import Image from "next/image";
import Link from "next/link";

import Img1 from "../../public/icon-512x512.png";
import Img2 from "../../public/pexels-photo-546819.jpeg";
import Img3 from "../../public/pexels-photo-4483608.jpeg";

function Timeline() {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800 antialiased">
        <div className="container relative mx-auto flex flex-col space-y-8 px-6">
          <div className="left-17 absolute inset-0 z-0 h-full w-2 bg-white shadow-md md:left-0 md:right-0 md:mx-auto"></div>
          <div className="relative z-10">
            <Image
              src={Img1}
              alt=""
              width={96}
              height={96}
              className="xs:absolute h-24 w-24 rounded-full border-4 border-white object-cover shadow-md md:left-0 md:right-0 md:mx-auto"
            />
            <div className="xs:pl-28 xs:pt-0 relative pt-2 md:ml-auto md:w-1/2 md:pl-16">
              <div
                className="xs:top-11 xs:left-26 absolute inset-0 left-10 h-4 w-4 rotate-45 transform bg-white md:left-14"
                aria-hidden="true"
              ></div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <span className="text-sm font-bold tracking-wide text-indigo-600">
                  Aug 2023 - Current
                </span>
                <h1 className="pt-1 text-2xl font-bold">
                  Full Stack Engineer @{" "}
                  <Link href="https://staging.pllum.app" passHref={true}>
                    {" "}
                    Pllum
                  </Link>
                </h1>
                <p className="pl-4 pt-1">
                  <ul className="list-disc">
                    <li>
                      Utilising the T3 stack, incorporating Next.js, TypeScript,
                      Prisma, and Tailwind CSS to develop dynamic web
                      applications with robust code, efficient databases, and
                      appealing interfaces.
                    </li>

                    <li>
                      Resolving GitHub issues with systematic branch management,
                      optimising development workflows and code quality.
                    </li>
                    <li>
                      Integrating AI APIs, enhancing software functionality with
                      natural language processing and predictive analytics.
                    </li>
                    <li>
                      Consistently delivering visually appealing, responsive
                      user interfaces by combining technical skills with
                      user-centric design principles.
                    </li>
                    <li>
                      Collaborating within teams, fostering success through open
                      communication and the integration of diverse perspectives
                      to achieve shared objectives.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <Image
              src={Img2}
              alt=""
              width={96}
              height={96}
              className="xs:absolute h-24 w-24 rounded-full border-4 border-white object-cover shadow-md md:left-0 md:right-0 md:mx-auto"
            />
            <div className="xs:pl-28 xs:pt-0 relative pt-2 md:ml-0 md:mr-auto md:w-1/2 md:pl-0 md:pr-16">
              <div
                className="xs:top-11 xs:left-26 absolute inset-0 left-10 h-4 w-4 rotate-45 transform bg-white md:left-14 md:left-auto md:right-14"
                aria-hidden="true"
              ></div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <span className="text-sm font-bold tracking-wide text-indigo-600">
                  May 2022 - Current
                </span>
                <h1 className="pt-1 text-2xl font-bold">Programming Tutor</h1>
                <p className="pl-4 pt-1">
                  <ul className="list-disc">
                    <li>
                      Educating students beginner to intermediate programming
                      and problem solving skills, breaking down how to solve
                      complex exercises in high level languages such as Python.
                    </li>

                    <li>
                      Educating Students on programming, including; C, Python,
                      HTML and more.
                    </li>
                    <li>
                      Managing complex exercises in programming high level
                      languages.
                    </li>
                    <li>
                      Providing expert advice and recommendations on best
                      practice for students on problem solving.
                    </li>
                    <li>
                      Responsible for managing student development and growth
                      Coordinated language work flows for all students and
                      processes, contributing to the success of activities and
                      programs.
                    </li>
                    <li>
                      Instructing students on the processes for web development.
                      Cultivating a foundation of learning and success in
                      programming.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <Image
              src={Img3}
              alt=""
              width={96}
              height={96}
              className="xs:absolute h-24 w-24 rounded-full border-4 border-white object-cover shadow-md md:left-0 md:right-0 md:mx-auto"
            />
            <div className="xs:pl-28 xs:pt-0 relative pt-2 md:ml-auto md:w-1/2 md:pl-16">
              <div
                className="xs:top-11 xs:left-26 absolute inset-0 left-10 h-4 w-4 rotate-45 transform bg-white md:left-14"
                aria-hidden="true"
              ></div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <span className="text-sm font-bold tracking-wide text-indigo-600">
                  Mar 2023 - May 2023
                </span>
                <h1 className="pt-1 text-2xl font-bold">
                  Senior Office Assistant Election Material @ NSWEC
                </h1>
                <p className="pt-1">
                  Delivery, liased with office coordinate office assistants to
                  ensure appropriate number of accurate materials. Use software
                  to keep track of materials. Organised all returns. Ensured
                  quality assurance by liaising with multiple teams to cross
                  check votes due to the electorate being classified as closely
                  contested. Communicated with team members to ensure an
                  efficient election process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
