import { getTiles } from "../../../services/api";

const TileDetailsPage = async ({ params }) => {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const tiles = await getTiles();
  
  
  const tile = tiles.find((t) => String(t.id) === id);

 
  if (!tile) {
    return (
      <div className="max-w-5xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold">Tile not found!</h2>
        <p className="text-gray-500">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
 
      <img
        src={tile?.image}
        alt={tile.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {tile.title}
        </h1>

        <p className="text-xl font-semibold text-blue-600 mt-2">
          Price: {tile.price} {tile.currency || "BDT"}
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">
          {tile.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-4 text-sm text-gray-600">
          <p><span className="font-bold">Material:</span> {tile.material}</p>
          <p><span className="font-bold">Dimensions:</span> {tile.dimensions}</p>
          <p>
            <span className="font-bold">Availability:</span>{" "}
            <span className={tile.inStock ? "text-green-600" : "text-red-600"}>
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;