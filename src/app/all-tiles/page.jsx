import TileCard from "@/components/shared/TileCard";

import { getTiles } from "@services/api";
const AllTilesPage = async ({ searchParams }) => {

  // ✅ Next.js params unwrap
  const params = await searchParams;
  const category = params?.category;

  // ✅ get data from your API/service
  const tiles = await getTiles();

  // ✅ filter tiles by category
  const filteredTiles = category
    ? tiles.filter(
        (tile) =>
          tile.category?.toLowerCase() === category.toLowerCase()
      )
    : tiles;

  return (
    <div>

      {/* Title */}
      <h1 className="text-2xl font-bold m-4">
        All Tiles
      </h1>

      {/* Category Filter */}
     

      {/* Tiles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>

    </div>
  );
};

export default AllTilesPage;