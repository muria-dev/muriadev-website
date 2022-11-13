export default function Footer() {
  return (
    <>
      <footer className=" bg-[#3b3844] mt-96 ">
        <div className="container mx-auto ">
          <div className="py-4">
            <h3 className="text-white text-4xl text-center">
              Muria.<span className="text-purple-700">Dev</span>
            </h3>
            <p className="text-white text-center my-4">
              Jl. Lkr. Utara, Kayuapu Kulon, Gondangmanis, Kec. Bae, Kabupaten
              Kudus, Jawa Tengah 59327
            </p>
            <p className="text-center text-slate-300">
              Built with <span className="text-red-500">❤</span> by Muria Dev
              Team using Next.js
            </p>
            <p className="text-center">© 2021 Muria Dev</p>
          </div>
        </div>
      </footer>
    </>
  );
}
