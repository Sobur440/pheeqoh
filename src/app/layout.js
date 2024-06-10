import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavColourProvider from "@/contexts/NavColourContext";
import LandingAnimation from "@/components/LandingAnimation";
import SmoothScroll from "../components/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pheeqah",
  description:
    "I'm Bello Taofeeqah, but you can call me Pheeqoh. As an experienced Product/UX Designer, I excel in crafting strategic solutions that drive product success.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-neueMontreal bg-[#ECE8DC] overflow-x-hidden">
        <NavColourProvider>
          <LandingAnimation />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </NavColourProvider>
      </body>
    </html>
  );
}
