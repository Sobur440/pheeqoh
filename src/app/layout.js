import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pheeqoh",
  description: "Pheeqoh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-neueMontreal bg-[#ECE8DC] overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
