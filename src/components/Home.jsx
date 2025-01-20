import React, { useRef } from "react";
import Button from "../layouts/Button";
import Lottie from 'lottie-react';
import lottieAnimation from '../assets/LottieAnimation.json'

const Home = () => {
  const iframeRef = useRef(null);
  
  const handlePlayDemo = () => {
    const iframe = iframeRef.current;
    const src = "https://www.youtube.com/embed/CTRsnBVgGgk?autoplay=1";
    iframe.src = src;
  };

  return (
<div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#BDE0FE] to-[#FFB6C1]">
<div className="w-full lg:w-2/4 space-y-4 mt-64 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Create a story within seconds with AI
        </h1>
        <p className="text-textColor text-center lg:text-left">
          Just put the few words, related to that you will get a short story in 60 words.
        </p>

        <div className="flex flex-row gap-6 w-full justify-center lg:justify-start">
          <a href="/ai-story-generator">
            <Button title="CREATE STORY" />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-2/3 lg:ml-32">
       <Lottie animationData={lottieAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Home;
