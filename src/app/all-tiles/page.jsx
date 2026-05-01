import { getTiles } from "../../services/api";

const TileDetails = async ({ params }) => {
  const id = params?.id;

  const tiles = await getTiles();

  const tile = tiles.find((t) => String(t.id) === String(id));

  if (!tile) {
    return (
      <div className="p-10 text-center font-bold">
        Tile Not Found
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      
      {/* IMAGE */}
      <img
        src={tile.image}
        alt={tile.title}
        className="md:w-1/2 rounded-lg"
      />

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-bold">{tile.title}</h1>

        <p className="mt-4 text-gray-600">
          {tile.description}
        </p>

        <p className="mt-3 font-bold text-blue-600">
          Price: {tile.price}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Category: {tile.category}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Material: {tile.material}
        </p>
      </div>
    </div>
  );
};

export default TileDetails;