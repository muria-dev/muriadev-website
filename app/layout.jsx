import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <head />
      <body className="bg-[#1C1B1F]">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
