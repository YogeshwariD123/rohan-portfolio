"use client";
import { useState, useEffect } from "react";

export default function ShowLove() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Load saved count
  useEffect(() => {
    const saved = localStorage.getItem("loveCount");
    if (saved) setCount(parseInt(saved));
  }, []);

  const handleClick = () => {
    if (!clicked) {
      const newCount = count + 1;
      setCount(newCount);
      setClicked(true);
      localStorage.setItem("loveCount", newCount);
      setShowPopup(true);

      // Hide popup after 7 seconds
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  return (
    <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden">

      {/* Hero-style gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Glass heart button */}
      <button
        onClick={handleClick}
        className={`
          relative z-10 flex items-center gap-3 px-8 py-3 rounded-2xl
          bg-white/10 backdrop-blur-xl border border-white/20
          text-lg font-semibold
          hover:scale-105 transition shadow-lg
          ${clicked ? "text-white shadow-red-500/40" : "text-gray-300 shadow-purple-500/40"}
        `}
        
      >
        {/* Heart icon */}
        <span className="text-2xl">{clicked ? "❤️" : "🤍"}</span>
        {clicked ? "Thanks for loving" : "Show Some Love"}
      </button>

      {/* Counter */}
      <p className="relative z-10 mt-4 text-gray-400 text-sm">
        pepole showed love this portfolio{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {count}
        </span>
      </p>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-0 bg-white/10 backdrop-blur-xl border border-green-500 rounded-xl px-6 py-3 text-white font-medium animate-fade-in shadow-lg shadow-purple-500/40">
          Thanks for your love ❤️
        </div>
      )}

      {/* Simple fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
