import React from "react";
import image from "../assets/LogoSample_1.jpg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-dvw h-[8rem] bg-[#cad3e1] -mt-[6rem] flex justify-center -ml-[10rem] items-center rounded-full">
      <div className="flex justify-around w-[25rem] mt-[5rem]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-gray-400"} font-semibold`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-gray-400"} font-semibold`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/ass_test"
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-gray-400"} font-semibold`
          }
        >
          Assessment
        </NavLink>
        <NavLink
          to="/schedules"
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-gray-400"} font-semibold`
          }
        >
          Schedules
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-gray-400"} font-semibold`
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
