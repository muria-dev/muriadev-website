import Link from "next/link";
import Title from "./Title";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto p-4 mb-40 ">
        <div className="bg-gradient-to-b from-[#8330EE] via-[#3065CD] to-[#3065CD] p-8 rounded-xl py-20 flex gap-8 flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-white text-5xl font-bold">
              Apakah mempunyai pesan?
            </h1>
            <p className="text-slate-100 mt-4">
              Jika kamu memiliki pesan yang ingin disampaikan kepada Muria Dev,
              <br />
              anda dapat menuliskan pesan pada tombol kontak kami di samping.
            </p>
          </div>
          <div>
            <Link
              href={"/"}
              className="px-8 py-3 text-xl rounded-full bg-[#D0BCFF] text-[#381E72] md:mr-auto mt-8 md:mt-0  hover:bg-[#381E72] hover:text-white duration-200"
            >
              Kontak Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
