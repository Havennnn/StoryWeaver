import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        className="px-8 py-2 2xl:px-12 2xl:py-4 text-md 2xl:text-xl hover:bg-[#01FFDC] hover:text-[#031A2E] text-[#01FFDC] border border-[#01FFDC] hover:shadow-xl transition-all rounded-md"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
