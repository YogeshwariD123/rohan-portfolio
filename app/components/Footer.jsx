"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { icon: "devicon-linkedin-plain", link: " https://www.linkedin.com/in/rohan-koli-b993442b6/" },
    { icon: "devicon-github-original", link: "https://github.com/rohan-koli" },
    { icon: "devicon-google-plain", link: "mailto:rohankoli0610@gmail.com?subject=Portfolio%20Contact&body=Hi%20Rohan,%20I%20saw%20your%20portfolio..." },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-xl border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">
              Rohan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                Koli
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed font-semibold">
              Full Stack Developer crafting elegant, scalable, and
              user-focused digital experiences.
            </p>

            <div className="flex gap-4 pt-2">
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                             bg-white/10 border border-white/20
                             text-white text-2xl
                             hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500
                             hover:shadow-lg hover:shadow-purple-500/40"
                >
                  <i className={item.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-purple-400 font-semibold"
                        : "text-gray-400 hover:text-purple-400 font-semibold"
                    } transition`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-4 font-semibold">
                <i className="devicon-google-plain text-purple-400 text-xl font-bold"></i>
                rohankoli0610@gmail.com
              </div>

              <div className="flex items-center gap-4 font-semibold">
                <span className="text-purple-400 text-xl ">📍</span>
                Pune, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm font-bold">
          © {new Date().getFullYear()} Rohan Koli · Built with ❤️
        </div>
      </motion.div>

      {/* Scroll To Top */}
      {showTop && (
        <motion.button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          whileHover={{ scale: 1.15 }}
          className="fixed bottom-3 right-6 z-50 w-12 h-12 rounded-full
                     bg-gradient-to-r from-blue-500 to-pink-500
                     text-white text-xl shadow-lg shadow-purple-500/40"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
}
