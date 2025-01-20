import React, { useState } from "react";

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
    <div className="bg-gradient-to-r from-[#fbeffe] to-[#e5f1fd] text-black mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between gap-10 p-8 md:px-32 px-5 w=full">
      <div className="w-full md:w-1/2">
        <h1 className="font-semibold text-xl pb-4">Story Weaver</h1>
        <p className="text-sm">
          Story Weaver is an AI story generator. In a few seconds, you will get your own story based on the keywords and prompts you enter. It is very easy to use, and we have created a simple tool to help you create your own story. This tool is very useful and will give you a story of just 60 words.
        </p>

        <h2 className="font-medium text-lg mt-6">Contact Us</h2>
        <div>
          <p><strong>Email:</strong> <a href="mailto:Storyweaver@gmail.com" className="text-brightColor hover:underline">Storyweaver@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+91912039120321" className="text-brightColor hover:underline">+91 91203 91203 21</a></p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com/storyweaver" className="text-brightColor hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/storyweaver</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/storyweaver" className="text-brightColor hover:underline" target="_blank" rel="noopener noreferrer">instagram.com/storyweaver</a></p>
        </div>
      </div>

      
        <div className="w-full md:w-1/2">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-brightColor text-white p-2 rounded-md mt-4 hover:bg-darkColor transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          © 2024
          <span className="text-brightColor"> Story Weaver </span>| All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
