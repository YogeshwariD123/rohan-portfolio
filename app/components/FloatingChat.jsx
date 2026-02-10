"use client";

import { useState, useEffect } from "react";

const questions = [
  {
    q: "Hi 👋 What brings you here?",
    options: ["Job opportunity", "Project collaboration", "Just exploring"],
    a: {
      "Job opportunity": "That’s exciting 🚀",
      "Project collaboration": "Nice! I love collaborating 💡",
      "Just exploring": "Welcome! Feel free to explore 😊",
    },
  },
  {
    q: "Which role are you interested in?",
    options: ["Frontend Developer", "Full Stack Developer", "Internship"],
    a: {
      "Frontend Developer": "Frontend is my strong zone 💙",
      "Full Stack Developer": "Full stack? Best of both worlds 😎",
      Internship: "Great place to start your journey 🌱",
    },
  },
  {
    q: "What kind of work are you offering?",
    options: ["Full-time", "Internship", "Freelance"],
    a: {
      "Full-time": "Sounds stable and exciting ✨",
      Internship: "Learning + growth combo 📈",
      Freelance: "Flexible and fun 😄",
    },
  },
  {
    q: "Would you like to connect now?",
    options: ["Yes", "Later"],
    a: {
      Yes: "Awesome 🚀 You can contact me via the details above 💌",
      Later: "No worries 😊 I’ll be right here!",
    },
  },
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);

  // Ask first question
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ from: "bot", text: questions[0].q }]);
      }, 500);
    }
  }, [open]);

  const handleOption = (option) => {
    const current = questions[step];

    setMessages((prev) => [
      ...prev,
      { from: "user", text: option },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: current.a[option] },
      ]);
    }, 600);

    setTimeout(() => {
      if (questions[step + 1]) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: questions[step + 1].q },
        ]);
        setStep(step + 1);
      }
    }, 1200);
  };

  return (
    <>
      {/* Chat Button */}
     <div className="fixed bottom-18 right-6 z-50 group">
  {/* Hover Badge */}
  <div
    className="absolute right-16 top-1/2 -translate-y-1/2
    px-3 py-1 text-sm text-gray rounded-xl
    bg-white/10 backdrop-blur-xl border border-white/20
    shadow-lg shadow-purple-500/20
    opacity-0 scale-95
    group-hover:opacity-100 group-hover:scale-100
    transition-all duration-300 pointer-events-none"
  >
    Chat with me 
    </div>

  {/* Chat Button */}
  <button
    onClick={() => setOpen(!open)}
    className="w-12 h-12 rounded-full
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white text-2xl
    shadow-lg hover:scale-110
    transition"
  >
    ✨
  </button>
</div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl
          bg-[#0b1020] border border-white/20 shadow-xl overflow-hidden">
          
          <div className="p-4 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600">
            Chat with me 👋
          </div>

          <div className="p-4 space-y-3 max-h-72 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[80%]
                  ${msg.from === "bot"
                    ? "bg-white/10 text-white"
                    : "bg-blue-500 text-white ml-auto"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Options */}
          {questions[step] && (
            <div className="p-3 flex flex-wrap gap-2 border-t border-white/10">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="px-3 py-1 text-xs rounded-full
                  bg-white/10 text-white hover:bg-purple-500 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
