import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 gap-10 bg-[#031A2E]">
      <div className="container">
        <div className="w-full lg:mt-0 flex flex-col gap-3 justify-center items-center text-center">
          <h1 className="font-semibold w-3/4 text-4xl md:text-5xl 2xl:text-7xl bg-gradient-to-b from-[#C8D7F4] to-[#7393AE] text-transparent bg-clip-text leading-tight">
            Create a story within seconds with Story Weaver
          </h1>
          <p className="text-[#7393AE] w-2/4 text-sm 2xl:text-xl leading-6 tracking-tight">
            Simply enter a few words related to your idea, and our AI will
            generate a concise yet captivating short story of around 60 words.
            Let your imagination spark new tales in just a few clicks!
          </p>
          <div className="flex flex-row mt-6 w-full justify-center">
            <a href="/ai-story-generator">
              <Button title="CREATE STORY" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
