import Image from "next/image";
import HomePage from "./home/page";
import TopTiles from "@/components/shared/TilesGallery";
import TilesUpDateNews from "@/components/shared/TilesUpDateNews";

export default function Home() {
  return (
    <>
    <div>
      <HomePage />
      <TilesUpDateNews />
      <TopTiles />
    </div>

    </>
  )
}
