import Image from "next/image";

export default function Card({ icon, title, deskripsi }) {
  return (
    <>
      <div className="px-4 py-16 text-white bg-[#3b3844] rounded-xl lg:w-[418px] lg:h-[520px] flex flex-col items-center justify-center duration-150 hover:shadow-md hover:shadow-blue-800">
        <Image src={icon} width={64} height={64} alt={title} />
        <h1 className="text-3xl text-[#EADDFF] my-6">{title}</h1>
        <p className="text-xl">{deskripsi}</p>
      </div>
    </>
  );
}
