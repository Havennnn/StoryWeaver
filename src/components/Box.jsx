import React from "react";
import { FaBook, FaBrain, FaFileAlt, FaLightbulb } from "react-icons/fa";

const Box = () => {
  const items = [
    { icon: FaBook, title: "Stories", desc: "Explore a collection of captivating stories." },
    { icon: FaBrain, title: "AI Powered", desc: "Harness the power of artificial intelligence." },
    { icon: FaFileAlt, title: "Generative Text", desc: "Generate unique text based on prompts." },
    { icon: FaLightbulb, title: "Creative", desc: "Inspire creativity with innovative ideas." },
  ];

  return (
    <section className="px-5 lg:px-32 py-12 bg-[#031A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="bg-[#0b1f30] p-6 rounded-2xl border border-[#073046] text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#01FFDC] text-[#001219] mx-auto">
                  <Icon className="text-2xl" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white">{it.title}</h4>
                <p className="mt-2 text-sm text-[#9fb0bf]">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Box;
