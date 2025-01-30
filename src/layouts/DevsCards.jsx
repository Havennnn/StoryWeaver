import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-4/6 lg:w-2/6 bg-white p-6 rounded-lg gap-5 shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
      <div className="flex flex-row items-center justify-between lg:justify-start gap-1">
        <div className="w-2/5">
          <img
            className="rounded-full w-16 h-16 border-4 border-gradient-to-r from-[#C8D7F4] to-[#7393AE]"
            src={props.img}
            alt="img"
          /> 
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl text-gray-800">{props.title}</h2>
          <p className="text-sm text-gray-500">{props.username}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base">{props.desc}</p>
    </div>
  );
};

export default ReviewCard;
