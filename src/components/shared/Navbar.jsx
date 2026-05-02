"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const isActive = (path) => pathname === path;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b border-cyan-700 sticky top-0 z-50 shadow  bg-white">
      <nav className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-3 px-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2 justify-center md:justify-start text-center md:text-left">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <h3 className="font-bold text-gray-700 text-2xl md:text-3xl">
            Tiles<span className="text-cyan-700">Gallery</span>
          </h3>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center justify-center gap-6 text-sm">
          <li>
            <Link
              href="/"
              className={`pb-1 border-b-2 ${isActive("/") ? "border-cyan-700 text-cyan-700" : "border-transparent"
                }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-tiles"
              className={`pb-1 border-b-2 ${isActive("/all-tiles") ? "border-cyan-700 text-cyan-700" : "border-transparent"
                }`}
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              href="/my-profile"
              className={`pb-1 border-b-2 ${isActive("/my-profile") ? "border-cyan-700 text-cyan-700" : "border-transparent"
                }`}
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center justify-center md:justify-end gap-4">

          {isPending && <span className="text-sm">Loading...</span>}

          {!user && !isPending && (
            <div className="flex gap-3 text-sm">
              <Link href="/register">
                <Button size="md" className="bg-gradient-to-r from-cyan-800 rounded to-cyan-500">
                  Register
                </Button>
              </Link>

              <Link href="/login">
                <Button size="md" className="border border-cyan-700 rounded bg-gray-500">
                  Login
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.image || "/default-avatar.png"}
                  alt={user?.name}
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Link href="/my-profile" className="text-sm hidden md:block">
                {user?.name}
              </Link>

              <Button
                onClick={handleSignOut}
                size="md"
                className="bg-gradient-to-r rounded from-cyan-800 to-cyan-500"
              >
                Logout
              </Button>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;