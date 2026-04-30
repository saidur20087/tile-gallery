"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("All fields required");
      return;
    }

    toast.success("Login Successful");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>

      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>

      <p className="mt-3">
        New here? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}