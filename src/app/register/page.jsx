"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, email, password } = form;

    // basic validation
    if (!name || !email || !password) {
      toast.error("Name, Email and Password required");
      return;
    }

    // fake success (later BetterAuth connect করবে)
    toast.success("Registration Successful!");

    console.log("User Data:", form);

    // optional: reset form
    setForm({
      name: "",
      email: "",
      photo: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 border rounded shadow">

        <h1 className="text-2xl font-bold mb-5 text-center">
          Register Account
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        {/* Photo URL */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL (optional)"
          value={form.photo}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        {/* Login link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}