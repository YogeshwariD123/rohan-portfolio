"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">

        {/* Navbar Glass Box */}
        <div className="mt-4 h-20 flex items-center justify-between rounded-2xl
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-lg shadow-cyan-500/10 px-6">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cyan-400
            drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              Rohan.K
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-lg text-gray-300 font-medium">
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition-all duration-300
                    ${
                      pathname === item.path
                        ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] font-bold"
                        : "hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.9)] font-bold"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-400 font-bold"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-lg shadow-cyan-500/10 md:hidden">
            <ul className="flex flex-col text-gray-300">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 transition hover:text-cyan-400 hover:bg-white/5 font-bold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
