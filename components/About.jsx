import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="container mx-auto mt-32" id="about">
        <div className="flex flex-col justify-center items-center">
          <Title title="Tentang Muria Dev" />
          <p className="text-slate-200 text-3xl mt-8 leading-10 w-[80%] text-center">
            Muria Dev adalah komunitas mahasiswa Universitas Muria Kudus
            berbasis IT. Dibentuk pada tahun 2022 dan terus berkembang sampai
            sekarang. Muria Dev berfokus untuk menghasilkan karya di bidang
            rekayasa perangkat lunak dan perangkat keras. Kami bekerja sama
            secara individu maupun tim untuk menciptakan hasil yang terbaik.
            Muria Dev dapat memberikan dampak dan pengalaman yang positif bagi
            paminatnya.
          </p>
        </div>
      </div>
    </>
  );
}
