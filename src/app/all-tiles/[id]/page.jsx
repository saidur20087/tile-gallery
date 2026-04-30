import { getTiles } from "@/services/api";

const TileDetailsPage = async ({ params }) => {


  const { id } = await params;


  const tiles = await getTiles();


  const tile = tiles.find((t) => t.id === id);


  if (!tile) {
    return <div className="p-4">Tile not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">

      {/* Image */}
      <img
        src={tile.image}
        alt={tile.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold mt-4">
        {tile.title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        {tile.description}
      </p>

      {/* Price */}
      <p className="mt-2 font-semibold">
        {tile.price} {tile.currency}
      </p>

      {/* Extra Info */}
      <div className="mt-2 text-sm text-gray-600">
        <p>Material: {tile.material}</p>
        <p>Size: {tile.dimensions}</p>
        <p>
          Status:{" "}
          <span className={tile.inStock ? "text-green-600" : "text-red-600"}>
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>

    </div>
  );
};

export default TileDetailsPage;