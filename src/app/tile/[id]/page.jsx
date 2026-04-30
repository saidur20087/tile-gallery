import { getTileById } from "@/services/api";

export default async function TileDetails({ params }) {
  const tile = await getTileById(params.id);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={tile.image} className="md:w-1/2" />

      <div>
        <h1 className="text-3xl font-bold">{tile.title}</h1>
        <p className="mt-2">{tile.description}</p>

        <p className="mt-2">Material: {tile.material}</p>
        <p>Size: {tile.dimensions}</p>
        <p>Price: {tile.price} {tile.currency}</p>
      </div>
    </div>
  );
}