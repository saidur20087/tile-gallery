import TileCard from "./TileCard";

const TopTiles = async () => {
  const res = await fetch("http://localhost:3000/data.json",{cache:"no-store"});
  const tiles = await res.json();

  const topTiles = tiles.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Top Tiles
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>

    </div>
  );
};

export default TopTiles;