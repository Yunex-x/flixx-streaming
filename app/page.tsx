import Image from "next/image";
import Navbar from "./components/heroSection";
import TrendingSection from "./components/TrendingSection";
import SparksCarouselDemo from "./carousel";
export default function Home() {
  return (
    <>
      <Navbar />
      <TrendingSection />
      </>
  )
}