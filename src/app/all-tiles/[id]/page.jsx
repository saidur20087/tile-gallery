import { getTiles } from "../../../services/api";

const TileDetails = async ({ params }) => {
  const { id } = await params;

  const tiles = await getTiles();


  const tile = tiles.find((t) => String(t.id) === String(id));


  if (!tile) {
    return (
      <div className="p-10 text-center font-bold">
        Tile Not Found! ID: {id}
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* <img src={tile.image} alt={tile.title} className="md:w-1/2" /> */}

      <div>
        <h1 className="text-3xl font-bold">{tile.title}</h1>
        <p className="mt-4 text-gray-600">{tile.description}</p>
        <p className="mt-2 text-xl font-bold text-blue-600">
          Price: {tile.price}
        </p>
      </div>
    </div>
  );
};

export default TileDetails;