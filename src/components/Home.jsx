import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <section className="flex items-center bg-[#031A2E] px-5 lg:px-32 pt-12">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold leading-tight text-white">
            <span className="block bg-gradient-to-b from-[#C8D7F4] to-[#7393AE] bg-clip-text text-transparent">
              Create a story within seconds
            </span>
            <span className="block text-[#01FFDC]">with Story Weaver</span>
          </h1>

          <p className="mt-6 text-[#A9BDD0] max-w-xl text-sm md:text-base 2xl:text-lg leading-relaxed">
            Enter a few words related to your idea and our AI will craft a concise, captivating micro-story
            (~60 words). Spark new tales quickly — inspiration delivered in seconds.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a href="/ai-story-generator">
              <Button title="CREATE STORY" />
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="rounded-2xl bg-[#0b1f30] p-6 shadow-xl border border-[#063245]">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Instant micro-stories</h3>
                <p className="text-sm text-[#A9BDD0] mt-1">AI-generated, ready to use or edit — fast and fun.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#061723] p-4 border border-[#073046]">
                <h4 className="text-sm font-semibold text-[#01FFDC]">Short & Snappy</h4>
                <p className="text-xs text-[#9fb0bf] mt-1">Stories optimized for brevity and impact.</p>
              </div>

              <div className="rounded-lg bg-[#061723] p-4 border border-[#073046]">
                <h4 className="text-sm font-semibold text-[#01FFDC]">Creative Prompts</h4>
                <p className="text-xs text-[#9fb0bf] mt-1">Use 4–6 keywords for best results.</p>
              </div>

              <div className="rounded-lg bg-[#061723] p-4 border border-[#073046]">
                <h4 className="text-sm font-semibold text-[#01FFDC]">Safe & Fast</h4>
                <p className="text-xs text-[#9fb0bf] mt-1">Runs on secure server side APIs.</p>
              </div>

              <div className="rounded-lg bg-[#061723] p-4 border border-[#073046]">
                <h4 className="text-sm font-semibold text-[#01FFDC]">Export</h4>
                <p className="text-xs text-[#9fb0bf] mt-1">Copy with one click and reuse anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
