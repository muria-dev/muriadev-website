import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container mx-auto">
        <h1>ini adalah halaman about</h1>
        <Image src="/images/belajar.png" width={200} height={200} />
      </div>
    </>
  );
}
