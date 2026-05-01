import TileCard from "@/components/shared/TileCard";

const AllTilesPage = async ({ searchParams }) => {
  const category = searchParams?.category;

  // 🔥 DATA FETCH
  const res = await fetch(
    "https://tiles-gallery-psi.vercel.app/data.json",
    {
      cache: "no-store", // always fresh data
    }
  );

  const tiles = await res.json();

  // 🔍 FILTER LOGIC
  const filteredTiles = category
    ? tiles.filter(
        (tile) =>
          tile.category?.toLowerCase() === category.toLowerCase()
      )
    : tiles;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Tiles</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;