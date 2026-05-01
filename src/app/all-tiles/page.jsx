import TileCard from "@/components/shared/TileCard";


const AllTilesPage = async ({ searchParams }) => {
  const category = searchParams?.category;


  const res = await fetch(
    "https://tiles-gallery-psi.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const tiles = await res.json();

  console.log("Category:", category);


  const filteredTiles = category
    ? tiles.filter(
        (tile) =>
          tile.category?.toLowerCase() === category.toLowerCase()
      )
    : tiles;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Tiles</h1>

           {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;