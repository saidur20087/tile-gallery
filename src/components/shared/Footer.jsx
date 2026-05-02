"use client";

import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 to-cyan-500 text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold">TileGallery</h2>
          <p className="mt-3 text-gray-200 text-sm md:text-base">
            Discover premium tiles for your perfect aesthetic. Modern, stylish and high-quality collections.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm md:text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Social Link</h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="hover:text-blue-400">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-sky-400">
              <CiTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-200 text-sm md:text-base">
            Email: support@tilegallery.com
          </p>
          <p className="text-gray-200 text-sm md:text-base">
            Phone: +880 1234-567890
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-cyan-700 text-center py-4 text-gray-200 text-sm">
        © {new Date().getFullYear()} TileGallery. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;