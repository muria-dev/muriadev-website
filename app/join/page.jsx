import Image from "next/image";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-white text-6xl font-bold leading-tight mt-28">
            Gabung sekarang bersama kami
          </h1>
          <p className="text-white my-4">
            Karena beberapa alasan kami menggunakan discord sebagai wadah untuk
            komunitas utama kami <br />
          </p>
          <Link
            href={"https://discord.gg/SmWMZsXjHJ"}
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <Image
              src={
                "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png"
              }
              width={30}
              height={30}
              className="inline-block"
            ></Image>
            Join Discord
          </Link>
        </div>
      </div>
    </>
  );
}
