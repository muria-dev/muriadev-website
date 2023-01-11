"use client";

import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export default function Header() {
  const [Toggle, setToggle] = useState(false);

  // if change location, close the menu

  function toggleHandler(e) {
    e.preventDefault();
    setToggle(!Toggle);
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between pt-6 text-white">
          <h1 className="cursor-pointer text-4xl">MuriaDev</h1>
          <ul>
            <li className="lg:hidden">
              <button
                className={
                  Toggle
                    ? "rounded border-2 p-1"
                    : " rounded border-2 border-transparent p-1"
                }
                onClick={toggleHandler.bind(this)}
              >
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
              </button>
            </li>
            <ul
              className={
                Toggle
                  ? " absolute right-0 top-24 flex h-[400px] w-screen flex-col items-center justify-center gap-8 rounded-lg bg-[#3b3844]  p-4 shadow-2xl  transition duration-100"
                  : "hidden lg:flex"
              }
            >
              <li>
                <Link
                  className="p-2 text-xl duration-150 hover:text-purple-200"
                  href={"./"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="p-2 text-xl duration-150 hover:text-purple-200"
                  href={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="p-2 text-xl duration-150 hover:text-purple-200"
                  href={"/events"}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="p-2 text-xl duration-150 hover:text-purple-200"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </li>
              {/* <li className="bg-[#D0BCFF] w-10 h-10 mx-5 rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/icon.png"
                  width={17}
                  height={17}
                  alt="search"
                />
              </li> */}
              <li className="">
                <Link
                  className="rounded-full bg-[#D0BCFF] px-6 py-3 text-xl text-[#381E72] duration-300  hover:bg-[#381E72] hover:text-white md:ml-12"
                  href={"/join"}
                >
                  Gabung Sekarang
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </>
  );
}
