import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Storys from "./Storys";
import { WiStars } from "react-icons/wi";
import Button from "../layouts/Button";

const AiStory = () => {
  const [prompts, setPrompts] = useState("");
  const [story, setStory] = useState(false);
  const [error, setError] = useState("");

  const handleStory = () => {
    if (prompts.trim() === "") {
      setError("Prompt cannot be empty. Please enter a prompt.");
      return;
    }
    console.log("clicked");
    setStory(true);
    setError("");
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="min-h-[70vh] max-h-[80vh] lg:min-h-screen flex flex-col justify-center items-center bg-[#031A2E] px-4 sm:px-6 lg:px-8">
          <div className="p-10 mt-10 flex flex-col items-center lg:my-10 max-w-md w-full rounded-xl bg-[#0b1f30] shadow-xl">
            <div className="flex items-center w-full">
              <h2 className="flex items-center font-medium text-lg px-2 text-[#01FFDC]">
                <WiStars size={25} className="text-[#01FFDC] font-semibold" />
                Enter the Prompts
              </h2>
            </div>
            <textarea
              className="w-full m-4 h-[8rem] p-2 rounded-lg border border-[#01FFDC] focus:outline-none bg-gradient-to-l from-[#C8D7F4] to-[#7393AE] text-transparent bg-clip-text resize-none"
              placeholder="Prompt should be in keywords. Enter 4 to 6 words to generate the best AI story."
              value={prompts}
              onChange={(e) => setPrompts(e.target.value)}
            ></textarea>
            {error && <p className="text-red-500 text-sm my-2">{error}</p>}
            <div className="">
              <Button title="Generate" onClick={handleStory} />
            </div>
          </div>
        </div>
      </div>
      {story && <Storys prompts={prompts} />}
      <hr className="border-1.5 border-gray-300" />
      <Footer />
    </div>
  );
};

export default AiStory;
