import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TileCard = ({ tile }) => {
  return (
    <Card className="border border-cyan-500 rounded-xl p-3 hover:shadow-lg transition">

      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {tile.category}
        </Chip>

        <Chip
          size="sm"
          color={tile.inStock ? "success" : "danger"}
          className="absolute left-2 top-2"
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </Chip>
      </div>

      <h2 className="font-semibold mt-3 text-lg">
        {tile.title}
      </h2>

      <p className="text-sm text-gray-500 line-clamp-2">
        {tile.description}
      </p>

      <p className="text-sm font-medium mt-1">
        {tile.price} {tile.currency}
      </p>

      <div className="text-sm text-gray-600 mt-1">
        <p>Material: {tile.material}</p>
        <p>Size: {tile.dimensions}</p>
      </div>

      <Link href={`/all-tiles/${tile.id}`} className="block mt-3">
        <Button className="w-full bg-gradient-to-r from-cyan-800 to-cyan-500">
          View Details
        </Button>
      </Link>

    </Card>
  );
};

export default TileCard;