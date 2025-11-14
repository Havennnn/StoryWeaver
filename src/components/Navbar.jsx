import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="w-full bg-[#063245] z-20"> 
      <div className="bg-[#031A2E]/70 border-b border-[#073046]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold text-white">Story Weaver</h1>
              <div className="text-xs text-gray-300 -mt-0.5">Micro-stories, instantly</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 py-1 transition text-sm lg:text-base ${
                  isActive ? "text-[#01FFDC] font-semibold" : "text-[#A9BDD0] hover:text-[#01FFDC]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/ai-story-generator"
              className={({ isActive }) =>
                `px-2 py-1 transition text-sm lg:text-base ${
                  isActive ? "text-[#01FFDC] font-semibold" : "text-[#A9BDD0] hover:text-[#01FFDC]"
                }`
              }
            >
              AI Story
            </NavLink>

            <div className="md:hidden text-[#A9BDD0]">
              {menu ? (
                <AiOutlineClose size={24} onClick={handleChange} className="cursor-pointer" />
              ) : (
                <AiOutlineMenuUnfold size={24} onClick={handleChange} className="cursor-pointer" />
              )}
            </div>

          </nav>
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 top-16 h-[calc(100vh-4rem)] z-30 transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#071826] h-full text-white p-6 flex flex-col">

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-sm font-semibold">Story Weaver</div>
                <div className="text-xs text-gray-300">Explore</div>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-4 text-xl">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-3 px-2 rounded-md transition-colors ${
                  isActive ? "bg-[#063245] text-[#01FFDC] font-semibold" : "text-gray-200 hover:bg-[#022a3a]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/ai-story-generator"
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-3 px-2 rounded-md transition-colors ${
                  isActive ? "bg-[#063245] text-[#01FFDC] font-semibold" : "text-gray-200 hover:bg-[#022a3a]"
                }`
              }
            >
              AI Story
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
