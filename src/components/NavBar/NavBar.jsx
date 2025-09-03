"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFlagUsa,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSignInAlt,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-16 bg-blue-950 text-white font-bold">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <div className="text-xl bg-white">
          <Image
            src={"/images/Ideasplanner_logo.png"}
            width={120}
            height={80}
            alt="Logo"
          />
        </div>

        <div className="hidden md:flex flex-row gap-8 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <CiSearch className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaFlagUsa size={18} className="cursor-pointer" />
          <button className="bg-white text-blue-900 px-3 py-1 rounded flex items-center gap-2 hover:bg-gray-200">
            Sign-In
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-900 w-full absolute top-16 left-0 px-4 py-3 flex flex-col gap-4 z-50 shadow-md">
          <Link href={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href={"/about"} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex gap-4 mt-2">
            <CiSearch className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaFlagUsa size={18} className="cursor-pointer" />
            <button className="bg-white text-blue-900 px-2 py-0 rounded flex items-center gap-2">
              Sign-In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
