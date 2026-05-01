import { Button } from "@heroui/react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-[500px] md:h-[60vh] bg-[url('https://www.hrjohnsonindia.com/assets/images/blog/ceramic-vs-vitrified-tiles-for-your-flooring.jpg')] bg-cover bg-center flex items-center rounded-xl shadow-2xl mt-4 md:mt-6 overflow-hidden">
      
      {/* Overlay - Ensuring full coverage */}
      <div className="absolute inset-0 bg-black/50 flex items-center">
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 text-white text-center md:text-left">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
            Discover Your <span className="text-cyan-400">Perfect</span> Aesthetic
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-gray-300 leading-relaxed">
            Explore premium tile collections to design modern, elegant and stylish spaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <Link href="/all-tiles" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-semibold text-white bg-gradient-to-r from-cyan-800 to-cyan-500 px-8">
                Browse Tiles
              </Button>
            </Link>

            <Link href="/my-profile" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-semibold text-white border bg-transparent border-cyan-800 hover:bg-cyan-500/10 px-8">
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