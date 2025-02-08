import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <div className="bg-[#031A2E] text-[#C8D7F4] mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between gap-10 p-8 md:px-32 px-5 w=full">
        <div className="w-full md:w-1/2">
          <h1 className="font-semibold text-xl 2xl:text-3xl pb-4 text-[#01FFDC]">
            Story Weaver
          </h1>
          <p className="text-sm 2xl:text-xl">
            Story Weaver is an AI story generator. In a few seconds, you will
            get your own story based on the keywords and prompts you enter. It
            is very easy to use, and we have created a simple tool to help you
            create your own story. This tool is very useful and will give you a
            story of just 60 words.
          </p>

          <h2 className="font-medium text-lg 2xl:text-2xl mt-6 text-[#01FFDC]">
            Contact Us
          </h2>
          <div className="mt-2 flex gap-5 text-2xl 2xl:text-4xl">
            <a
              href="mailto:marablelatrell@gmail.com"
              className="flex items-center text-[#C8D7F4]"
            >
              <FaEnvelope />
            </a>

            <a
              href="Phone:09953324941"
              className="flex items-center text-[#C8D7F4]"
            >
              <FaPhone />
            </a>

            <a
              href="https://facebook.com/"
              className="flex items-center text-[#C8D7F4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-xl 2xl:text-3xl pb-4 pt-5 md:pt-0">
            Contact Us
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 2xl:text-xl text-black"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
              rows="2"
            ></textarea>
            <button
              type="submit"
              className="border border-[#01FFDC] text-[#01FFDC] p-2 rounded-md mt-2 hover:bg-darkColor transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 gap-2">
        <img
          src="/LM.svg"
          alt="LatsMarbls"
          className="h-8 w-8 2xl:h-12 2xl:w-12"
        />
        <p className="text-center py-4 2xl:text-xl">
          © LatsMarbls,
          <span className="text-[#01FFDC]"> Story Weaver </span> Project | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
