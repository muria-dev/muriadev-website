"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [Toggle, setToggle] = useState(false);

  function toggleHandler(e) {
    e.preventDefault();
    setToggle(!Toggle);
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center text-white pt-6">
          <h1 className="text-4xl cursor-pointer">MuriaDev</h1>
          <ul>
            <li className="lg:hidden">
              <button
                className={
                  Toggle
                    ? "rounded border-2 p-1"
                    : " rounded border-2 border-transparent p-1"
                }
                onClick={toggleHandler}
              >
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
                <span className="my-1 block h-[2px] w-5 bg-white"></span>
              </button>
            </li>
            <ul
              className={
                Toggle
                  ? " absolute right-0 h-1/2 w-screen gap-4  flex flex-col items-center justify-center rounded-md bg-black p-4 shadow-lg transition duration-100"
                  : "hidden lg:flex"
              }
            >
              <li>
                <Link className="p-2 text-xl" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="p-2 text-xl" href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="p-2 text-xl" href={"/events"}>
                  Events
                </Link>
              </li>
              <li>
                <Link className="p-2 text-xl" href={"/contact"}>
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
                  className="px-6 py-3 text-xl rounded-full bg-[#D0BCFF] text-[#381E72] "
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
