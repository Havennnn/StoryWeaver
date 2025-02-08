import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Storys from "./Storys";
import { WiStars } from "react-icons/wi";
import Button from "../layouts/Button";

const AiStory = () => {
  const [prompts, setPrompts] = useState("");
  const [story, setStory] = useState(false);
  const [error, setError] = useState("");
  const storyRef = useRef(null);

  const handleStory = () => {
    if (prompts.trim() === "") {
      setError("Prompt cannot be empty. Please enter a prompt.");
      return;
    }
    console.log("clicked");
    setStory(true);
    setError("");
  };

  useEffect(() => {
    if (story && storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [story]);

  return (
    <div>
      <Navbar />
      <div>
        <div className="min-h-[70vh] max-h-[80vh] lg:min-h-screen flex flex-col justify-center items-center bg-[#031A2E] px-4 sm:px-6 lg:px-8">
          <div className="p-10 mt-10 flex flex-col items-center lg:my-10 max-w-2xl w-full rounded-xl 2xl:rounded-4xl bg-[#0b1f30] shadow-xl 2xl:shadow-3xl">
            <div className="flex w-full">
              <h2 className="flex gap-2 justify-center items-center font-medium text-lg 2xl:text-3xl text-[#01FFDC]">
                <WiStars size={50} className="text-[#01FFDC] font-semibold" />
                Enter the Prompts
              </h2>
            </div>
            <textarea
              className="w-full m-4 h-[8rem] 2xl:text-2xl p-2 rounded-lg border border-[#01FFDC] focus:outline-none bg-[#0b1f30] resize-none placeholder-gray-500 focus:placeholder-transparent text-white"
              placeholder="Prompt should be in keywords. Enter 4 to 6 words to generate the best AI story."
              value={prompts}
              onChange={(e) => setPrompts(e.target.value)}
            ></textarea>

            {error && (
              <p className="text-red-500 text-sm 2xl:text-xl my-2">{error}</p>
            )}
            <div className="2xl:text-xl">
              <Button title="Generate" onClick={handleStory} />
            </div>
          </div>
        </div>
      </div>
      <div ref={storyRef}>{story && <Storys prompts={prompts} />}</div>
      <hr className="border-1.5 border-gray-300" />
      <Footer />
    </div>
  );
};

export default AiStory;
