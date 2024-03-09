import React from "react";
import { NavLink } from "react-router-dom";
// import image from "../assets/LogoSample_1.jpg";

function Template() {
  return (
    <div className="flex justify-between w-[80rem] h-[30rem]">
      <div className="w-[40rem] h-[30rem] flex flex-col justify-around">
        <div>
          <h1 className="text-[2.5rem] font-[Helvetica Neue] font-extrabold text-white">
            "Achieve Brilliance, Unleash Success: IntegreLearn's IIT JEE
            Mastery"
          </h1>
        </div>
        <div className="flex flex-col justify-around items-center">
          <NavLink to="/teacher/login">
            <div className="w-[30rem] h-[5rem] bg-gray-200 rounded-full text-3xl text-center p-5 m-5 text-gray-500 font-bold font-[Helvetica Neue]">
              Teachers Panel
            </div>
          </NavLink>
          <NavLink to="/student/login">
            <div className="w-[30rem] h-[5rem] bg-gray-200 rounded-full text-3xl text-center p-5 m-5 text-gray-500 font-bold font-[Helvetica Neue]">
              Student Panel
            </div>
          </NavLink>
        </div>
      </div>
      <div className="w-[35rem] h-[30rem] bg-[url('./assets/study2.avif')] bg-contain rounded-2xl"></div>
    </div>
  );
}

export default Template;
