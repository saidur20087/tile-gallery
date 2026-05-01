const TileDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://tiles-gallery-psi.vercel.app/data.json", {
    cache: "no-store",
  });

  const tiles = await res.json();
  const tile = tiles.find((t) => t.id === id);

  if (!tile) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-xl">
        Tile not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-6">
        
        {/* Image */}
        <div className="w-full">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {tile.title}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <p><span className="font-semibold">Category:</span> {tile.category}</p>
            <p><span className="font-semibold">Material:</span> {tile.material}</p>
            <p><span className="font-semibold">Size:</span> {tile.dimensions}</p>
            <p><span className="font-semibold">Stock:</span> {tile.inStock ? "Available" : "Out of stock"}</p>
          </div>

          <div className="text-2xl font-bold text-cyan-600">
            ${tile.price} <span className="text-sm text-gray-500">{tile.currency}</span>
          </div>

          <button className="mt-4 w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white py-3 rounded-lg hover:opacity-90 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileDetails;