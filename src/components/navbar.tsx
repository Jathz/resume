import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Logo.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed h-24 w-full bg-white shadow-xl">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={205}
            height={75}
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-xl uppercase hover:border-b">About</li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 text-xl uppercase hover:border-b">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-xl uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer pl-24 sm:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 h-screen w-[65%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:hidden"
            : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4 hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4 hover:border-b"
              >
                About
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4 hover:border-b"
              >
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4 hover:border-b"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-around pt-10">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
          <AiOutlineYoutube size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={205}
            height={75}
            className="cursor-pointer py-6"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
