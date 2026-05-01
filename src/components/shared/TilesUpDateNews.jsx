import React from 'react';
import Marquee from 'react-fast-marquee';

 const news = [
  {
    id: 1,
    title: "Modern Ceramic Wall Tile",
    description: "High-quality ceramic tile for interior design.",
  },
  {
    id: 2,
    title: "Luxury Marble Floor Tile",
    description: "Premium marble finish for elegant flooring.",
  },
  {
    id: 3,
    title: "Outdoor Anti-Slip Tile",
    description: "Durable tile for safe outdoor use.",
  },
];

const TilesUpDateNews = () => {
  return (
    <div className="flex items-center bg-gray-200 mt-8 rounded border border-green-00 text-white  overflow-hidden">
      
     
      <div className="px-2 py-2 font-bold whitespace-nowrap border bg-red-400 text-white border-green-600">
        Latest Tiles News
      </div>

      {/* RIGHT MARQUEE */}
      <div className="flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {news.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mx-10">
              <span className="font-semibold text-green-900">{item.title}</span>
              <span className="text-red-500">•</span>
              <span className="text-gray-600">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TilesUpDateNews;
