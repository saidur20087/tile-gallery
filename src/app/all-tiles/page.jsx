import Category from "@/components/Category";
import TileCard from "@/components/TileCard";

const AllTilesPage = async ({ searchParams }) => {
  const { category } = searchParams || {};

  const res = await fetch("https://tiles-gallery-psi.vercel.app/data.json");
  const tiles = await res.json();

  console.log(category);

  const filteredTiles = category
    ? tiles.filter(
        (tile) =>
          tile.category?.toLowerCase() === category.toLowerCase()
      )
    : tiles;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Tiles</h1>

      <Category />

      <div className="grid grid-cols-4 gap-5">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;