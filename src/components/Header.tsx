"use client";

import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#overview", label: "Overview" },
    { href: "/#problems", label: "Problems" },
    { href: "/#solution", label: "Solution" },
    { href: "/team", label: "Team" },
    { href: "/blog", label: "News" },
    { href: "/#contact", label: "Contact" },
    { href: "/#resources", label: "Resources" },
  ];

  return (
    <header className="bg-white text-black p-4 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold h-auto text-lg0 ">
          <Image src="/logo.png" alt="PropertyX Logo" width={200} height={30} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Modal Menu */}
      {isOpen && (
        <div className="fixed inset-0  z-50 flex flex-col items-center justify-center gap-8 text-lg bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
            aria-label="Close menu"
          >
            <ClearIcon />
          </button>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline text-xl"
              onClick={() => setIsOpen(false)} // close modal on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
