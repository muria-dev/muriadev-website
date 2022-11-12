import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-28">
          <div>
            <h1 className="text-white text-6xl font-bold leading-tight">
              Welcome to Muria Dev Community
            </h1>
            <p className="text-white my-8 text-[22px] ">
              Komunitas Muria Dev adalah komunitas independen yang berfokus
              dalam bidang pemrograman.
            </p>
            <Link
              href={"/#about"}
              className="bg-[#D0BCFF] px-8 py-3 block w-fit text-xl rounded-full mt-8 hover:bg-[#381E72] hover:text-white duration-100"
            >
              More Information
            </Link>
          </div>
          <div>
            <Image
              className="block ml-auto"
              src={"/images/hero.png"}
              width={526}
              height={526}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
