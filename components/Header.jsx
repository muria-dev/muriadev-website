import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center text-white pt-6">
          <h1 className="text-4xl cursor-pointer">MuriaDev</h1>
          <ul className="flex gap-4 items-center">
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
            <li className="bg-[#D0BCFF] w-10 h-10 mx-5 rounded-full flex items-center justify-center cursor-pointer">
              <Image src="/images/icon.png" width={17} height={17} />
            </li>
            <li className="">
              <Link
                className="px-6 py-3 text-xl rounded-full bg-[#D0BCFF] text-[#381E72] "
                href={"/join"}
              >
                Gabung Sekarang
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
