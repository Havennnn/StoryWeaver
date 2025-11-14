import React from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/img/aboutus.json";
import Button from "../layouts/Button";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#031A2E] text-white py-20">
      <div className="max-w-6xl w-full">
        <h1 className="font-semibold text-center text-4xl lg:text-5xl 2xl:text-6xl mb-8 inline-block border-b-2 border-[#01FFDC] pb-3">
          About Us
        </h1>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <div>
              <Lottie animationData={lottieAnimation} loop={true} />
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-2xl bg-[#0b1f30] p-8 border border-[#073046] shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">What makes Story Weaver special</h2>

              <p className="text-[#A9BDD0] leading-relaxed mt-4">
                Story Weaver is an <strong className="text-white">AI-powered</strong> tool that helps you create unique,
                captivating short stories based on a few keywords or prompts. It’s designed for speed and creativity —
                produce ready-to-use micro-stories in about 60 words.
              </p>

              <p className="text-[#A9BDD0] leading-relaxed mt-4">
                With a simple interface and secure server-side generation, Story Weaver is perfect for writers,
                content creators, and anyone who wants quick inspiration. Generate, copy, and refine — storytelling made effortless.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#9fb0bf]">
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Fast</span>
                  <span>Generate stories in seconds</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Gemini</span>
                  <span>Uses Gemini 2.5 Flash</span>
                </div>
                <div className="flex flex-col mt-3 lg:mt-0">
                  <span className="font-semibold text-white">Creative</span>
                  <span>Unique outputs from your prompts</span>
                </div>
                <div className="flex flex-col mt-3 lg:mt-0">
                  <span className="font-semibold text-white">Easy</span>
                  <span>Simple UI, one-click copy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
