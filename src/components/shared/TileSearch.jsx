"use client";

import { useState } from "react";
import TileCard from "@/components/shared/TileCard";

const TileSearch = ({ tiles }) => {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">

      {/* 🔍 Search Bar */}
      <div className="mb-6 flex justify-center md:justify-between items-center flex-col md:flex-row gap-4">
        
        <h1 className="text-2xl font-bold">All Tiles</h1>

        <input
          type="text"
          placeholder="Search tiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-cyan-500 rounded-lg focus:outline-none  "
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tiles found
          </p>
        )}
      </div>

    </div>
  );
};

export default TileSearch;