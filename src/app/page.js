import Image from "next/image";
import HomePage from "./home/page";
import TopTiles from "@/components/shared/TilesGallery";

export default function Home() {
  return (
    <>
    <div>
      <HomePage />
      <TopTiles />
    </div>

    </>
  )
}
