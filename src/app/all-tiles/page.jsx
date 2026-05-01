import TileSearch from "@/components/shared/TileSearch";

const AllTilesPage = async ({ searchParams }) => {
  const category = searchParams?.category;

  const res = await fetch(
    "https://tiles-gallery-psi.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const tiles = await res.json();

  const filteredTiles = category
    ? tiles.filter(
        (tile) =>
          tile.category?.toLowerCase() === category.toLowerCase()
      )
    : tiles;

  return <TileSearch tiles={filteredTiles} />;
};

export default AllTilesPage;