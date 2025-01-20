import React from "react";
import Lottie from 'lottie-react';
import lottieAnimation from '../assets/img/aboutus.json'
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <Lottie animationData={lottieAnimation} loop={true} />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl ">
            Special of Story Weaver
          </h2>
          <p className="text-textColor">
          Story Weaver is an AI-powered tool that helps you create unique stories based on the keywords and prompts you provide.
          </p>
          <p className="text-textColor">
          With an easy-to-use interface, Story Weaver allows you to generate captivating stories in just a few seconds. Whether you need inspiration or quick content, Story Weaver is here to make storytelling effortless and fun.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
