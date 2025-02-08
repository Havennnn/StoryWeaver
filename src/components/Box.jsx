import React from "react";
import { FaBook, FaBrain, FaFileAlt, FaLightbulb } from "react-icons/fa";

const Box = () => {
  return (
    <div className="p-2 w-full max-w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 text-center">
        <div className="border p-4 2xl:p-8 flex flex-col items-center">
          <FaBook className="text-3xl 2xl:text-6xl text-[#031A2E]" />
          <p className="mt-2 2xl:mt-4 font-semibold 2xl:text-2xl">Stories</p>
          <p className="text-sm 2xl:text-xl text-gray-600 mt-1">
            Explore a collection of captivating stories.
          </p>
        </div>
        <div className="border p-4 2xl:p-8 flex flex-col items-center">
          <FaBrain className="text-3xl 2xl:text-6xl text-[#031A2E]" />
          <p className="mt-2 font-semibold 2xl:text-2xl">AI Powered</p>
          <p className="text-sm 2xl:text-xl text-gray-600 mt-1">
            Harness the power of artificial intelligence.
          </p>
        </div>
        <div className="border p-4 2xl:p-8 flex flex-col items-center">
          <FaFileAlt className="text-3xl 2xl:text-6xl text-[#031A2E]" />
          <p className="mt-2 font-semibold 2xl:text-2xl">Generative Text</p>
          <p className="text-sm 2xl:text-xl text-gray-600 mt-1">
            Generate unique text based on prompts.
          </p>
        </div>
        <div className="border p-4 2xl:py-8 2xl:px-12 flex flex-col items-center">
          <FaLightbulb className="text-3xl 2xl:text-6xl text-[#031A2E]" />
          <p className="mt-2 font-semibold 2xl:text-2xl">Creative</p>
          <p className="text-sm 2xl:text-xl text-gray-600 mt-1">
            Inspire creativity with innovative ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
