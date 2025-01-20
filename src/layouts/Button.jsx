import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button className="px-6 py-2 shadow-xl hover:bg-[#C08EF8] text-white border-violet-300 border font-semibold bg-[#D8B4F8] hover:shadow-xl transition-all rounded-full" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
