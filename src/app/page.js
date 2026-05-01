import Image from "next/image";
import HomePage from "./home/page";
import TopTiles from "@/components/shared/TilesGallery";
import TilesUpDateNews from "@/components/shared/TilesUpDateNews";
import FeaturedSection from "@/components/shared/FeaturedSection ";
import WhyChooseUs from "@/components/shared/WhyChooseUs ";

export default function Home() {
  return (
    <>
    <div>
      <HomePage />
      <TilesUpDateNews />
      <TopTiles />
      <FeaturedSection />
      <WhyChooseUs />
    </div>

    </>
  )
}
