import About from "../components/About";
import Contact from "../components/Contact";
import Acara from "../components/Event";
import Hero from "../components/Hero";
import Kegiatan from "../components/Kegiatan";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>MuriaDev - Komunitas Belajar Coding Mahasiswa UMK</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content=" Komunitas Muria Dev adalah komunitas independen yang berfokus
              dalam bidang pemrograman."
        />
        <meta name="author" content="MuriaDev" />
        <meta
          name="keywords"
          content="MuriaDev, Muria Developer,Komunitas Coding UMK, Komunitas Universitas Muria Kudus, UMK"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muriadev.my.id" />
        <meta
          property="og:title"
          content="MuriaDev - Komunitas Belajar Coding Mahasiswa UMK"
        />
        <meta
          property="og:description"
          content="Komunitas Muria Dev adalah komunitas independen yang berfokus
              dalam bidang pemrograman."
        />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Kegiatan />
      <About />
      <Acara />
      <Contact />
    </Layout>
  );
}
