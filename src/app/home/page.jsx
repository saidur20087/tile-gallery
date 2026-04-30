import { Button } from "@heroui/react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-[url('https://www.hrjohnsonindia.com/assets/images/blog/ceramic-vs-vitrified-tiles-for-your-flooring.jpg')] h-[60vh] w-full bg-cover bg-center flex items-center rounded-lg shadow-2xl mt-6">
      
      {/* Overlay */}
      <div className="w-full h-full bg-black/50 rounded-lg flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Aesthetic
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore premium tile collections to design modern, elegant and stylish spaces.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            
            {/* Main CTA */}
            <Link href="/all-tiles">
              <Button className="bg-cyan-700 border   text-white hover:bg-blue-600">
                Browse Tiles
              </Button>
            </Link>

            {/* Secondary CTA */}
            <Link href="/my-profile">
              <Button  variant="bordered" className="text-white border border-cyan-300">
                My Profile
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;