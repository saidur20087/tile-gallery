"use client";

import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">TileGallery</h2>
          <p className="mt-3 text-gray-400">
            Discover premium tiles for your perfect aesthetic. Modern, stylish and high-quality collections.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-center ">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-tiles">All Tiles</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>

        
          <div className=" gap-4 ">
            <div><h3 className="text-lg font-semibold mb-3">Social Link</h3></div>
            
            <div className="flex  gap-6 text-center">
            <a href="#" className="hover:text-blue-400"><FaFacebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><CiTwitter className="w-6 h-6" /></a>
            </div>

          </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@tilegallery.com</p>
          <p className="text-gray-400">Phone: +880 1234-567890</p>


        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        © {new Date().getFullYear()} TileGallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;