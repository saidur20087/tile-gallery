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
    <div className="border-b bg-white">
      <nav className="flex justify-between items-center py-3 px-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <h3 className="font-bold text-gray-700 text-lg">
            Tiles<span className="text-cyan-700">Gallery</span>
          </h3>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">

          <li>
            <Link
              href="/"
              className={`pb-1 border-b-2 rounded ${
                isActive("/") ? "border-cyan-700 text-cyan-700" : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-tiles"
              className={`pb-1 border-b-2 rounded ${
                isActive("/all-tiles") ? "border-cyan-700 text-cyan-700" : "border-transparent"
              }`}
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              href="/my-profile"
              className={`pb-1 border-b-2 rounded ${
                isActive("/my-profile") ? "border-cyan-700 text-cyan-700" : "border-transparent"
              }`}
            >
              My Profile
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {isPending && <span className="text-sm">Loading...</span>}

          {!user && !isPending && (
            <div className="flex gap-3 text-sm">
              <Link href="/register" >
                <Button size="sm" >Register</Button>
              </Link>

              <Link href="/login">
                <Button size="sm" color="primary" className="bg-cyan-700">Login</Button>
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

              <Link href="/my-profile" className="text-sm">
                {user?.name}
              </Link>

              <Button onClick={handleSignOut} size="sm" color="danger">
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