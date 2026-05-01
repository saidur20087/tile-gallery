import { Button } from "@heroui/react";
import Link from "next/link";

const featuredTiles = [
  {
    id: 1,
    title: "Modern Ceramic Tile",
    description: "Perfect for stylish interior design.",
    image: "https://i.ibb.co.com/Z6n635hk/hannahlouise123-checkerboard-1943243-1920.png",
  },
  {
    id: 2,
    title: "Luxury Marble Tile",
    description: "Premium finish for elegant spaces.",
    image: "https://i.ibb.co.com/7dn0r3WM/thedigitalartist-tiles-1557136-1920.jpg",
  },
  {
    id: 3,
    title: "Outdoor Anti-Slip Tile",
    description: "Safe and durable outdoor solution.",
    image: "https://i.ibb.co.com/5g7XtDYp/hannahlouise123-checkerboard-1941014-1920.png",
  },
];

const FeaturedSection = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Tiles</h2>

      <div className="grid grid-cols-3 gap-5">
        {featuredTiles.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {item.description}
              </p>

              {/* BUTTON */}
              <Link href={`/all-tiles/${item.id}`} className="block mt-3">
                <Button className="w-full bg-gradient-to-r from-cyan-800 to-cyan-500">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;