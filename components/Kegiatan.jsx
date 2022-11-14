import Card from "./Card";
import Title from "./Title";

export default function Kegiatan() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-36">
          <Title title="Mengapa Harus Muria Dev?" />
          <div className="mt-28 flex md:justify-between md:flex-row flex-col justify-center items-center gap-4 p-4">
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
        </div>
      </div>
    </>
  );
}
