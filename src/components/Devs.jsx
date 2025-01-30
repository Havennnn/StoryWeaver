import React from "react";
import Devs from "../layouts/DevsCards";
import img1 from "../assets/img/img.png";
import img2 from "../assets/img/shweta.png";
import img3 from "../assets/img/yash.png";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24">
        What Our Users Say
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center py-4 my-8">
        <Devs
          img={img1}
          title="Steve"
          username="@HeroOfTime"
          desc="Story Weaver has completely changed how I create content. The AI-generated stories are spot-on and save me so much time! Just like how the Master Sword always finds its mark!"
          className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 border border-gray-200 bg-white"
        />
        <Devs
          img={img2}
          title="Maria"
          username="@LaraCreations"
          desc="I was amazed at how easy it is to use Story Weaver. The interface is user-friendly, and the results are fantastic. It's as easy as solving an ancient puzzle!"
          className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 border border-gray-200 bg-white"
        />
        <Devs
          img={img3}
          title="Peter"
          username="@WebSlinger"
          desc="As a content creator, Story Weaver has become an essential tool in my workflow. Highly recommended! It's like swinging through the city with ease!"
          className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 border border-gray-200 bg-white"
        />
      </div>
    </div>
  );
};

export default Review;
