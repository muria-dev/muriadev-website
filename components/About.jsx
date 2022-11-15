import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="container mx-auto mt-32" id="about">
        <div className="flex flex-col justify-center items-center p-2">
          <Title title="Tentang Muria Dev" />
          <p className="text-slate-200 md:text-3xl text-2xl mt-8 md:leading-10 md:w-[80%] md:text-center text-left">
            Muria Dev adalah komunitas mahasiswa Universitas Muria Kudus
            berbasis IT. Dibentuk pada tahun 2022 dan terus berkembang sampai
            sekarang. Muria Dev berfokus untuk menghasilkan karya di bidang
            rekayasa perangkat lunak dan perangkat keras. Kami bekerja sama
            secara individu maupun tim untuk menciptakan hasil yang terbaik.
            Muria Dev dapat memberikan dampak dan pengalaman yang positif bagi
            peminatnya.
          </p>
        </div>
      </div>
    </>
  );
}
