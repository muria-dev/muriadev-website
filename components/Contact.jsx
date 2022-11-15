import Link from "next/link";
import Title from "./Title";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto p-4 mb-40 ">
        <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 p-8 rounded-xl py-20 flex gap-8 flex-col lg:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-white text-5xl font-bold">
              Apakah mempunyai pesan?
            </h1>
            <p className="text-slate-100 mt-4">
              Jika kamu memiliki pesan yang ingin disampaikan kepada Muria Dev,
              <br />
              anda dapat menuliskan pesan pada tombol kontak kami.
            </p>
          </div>
          <div>
            <Link
              href={"/"}
              className="px-8 py-3 text-xl rounded-full bg-[#D0BCFF] text-[#381E72] md:mr-auto mt-8 md:mt-0  hover:bg-[#381E72] hover:text-white duration-300"
            >
              Kontak Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
