import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavColourProvider from "@/NavColourContext";
import LandingAnimation from "@/components/LandingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pheeqah",
  description:
    "I'm Bello Taofeeqah, but you can call me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting strategic solutions that drive product success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-neueMontreal bg-[#ECE8DC] overflow-x-hidden">
        <LandingAnimation />
        <NavColourProvider>
          <Navbar />
          {children}
          <Footer />
        </NavColourProvider>
      </body>
    </html>
  );
}
