import Card from "./Card";

export default function Kegiatan() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-36">
          <h2 className="text-white text-5xl font-bold leading-tight text-center">
            Mengapa Harus Muria Dev?
          </h2>
          <div className="mt-28 flex justify-between">
            <Card
              icon={"/images/kegiatan1.png"}
              title={"Kode Open Source"}
              deskripsi="Muria Dev memiliki Github untuk membagikan kode yang dapat diakses oleh anggota"
            />
            <Card
              icon={"/images/kegiatan2.png"}
              title={"Mendapatkan Koneksi"}
              deskripsi="Muria Dev memiliki Github untuk membagikan kode yang dapat diakses oleh anggota"
            />
            <Card
              icon={"/images/kegiatan3.svg"}
              title={"Belajar Bareng"}
              deskripsi="Muria Dev mengadakan sharing session setiap minggu seputar pemrograman, dan UI/UX Design."
            />
          </div>
          <div className="mt-8">sl</div>
        </div>
      </div>
    </>
  );
}
