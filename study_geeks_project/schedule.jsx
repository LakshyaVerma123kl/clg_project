import React from "react";
import image from "./assets/id-badge.png";
import image2 from "./assets/folder.png";
function Schedule() {
  return (
    <div className="flex justify-between">
      {/* First block */}
      <div className="w-[18rem] h-[18rem] border-2 border-black rounded-2xl flex flex-col cursor-pointer mx-2">
        <div className="bg-gray-600 text-white rounded-t-xl h-[6rem]">
          <h4 className="hover:underline">B.tech 2nd year IT</h4>
          <h6 className="hover:underline">S7</h6>
          <h5 className="hover:underline">Lakshya</h5>
        </div>
        <div className="w-[4rem] h-[4rem] rounded-full bg-red-300 flex flex-col ml-[13rem] -mt-[2.5rem] text-white justify-center items-center text-3xl font-semibold">
          L
        </div>
        <div className="flex flex-col border-[.125rem] border-gray-400 w-[16rem]  justify-center items-center ml-[.9rem] mt-[8rem]"></div>
        <div className="flex">
          <img src={image} alt="" className="w-[2rem] h-[2rem] ml-[13rem]" />
          <img src={image2} alt="" className="w-[2rem] h-[1.8rem] ml-[.2rem]" />
        </div>
      </div>
      {/* Second block */}
      <div className="w-[18rem] h-[18rem] border-2 border-black rounded-2xl flex flex-col cursor-pointer mx-2">
        <div className="bg-gray-600 text-white rounded-t-xl h-[6rem]">
          <h4 className="hover:underline">B.tech 2nd year IT</h4>
          <h6 className="hover:underline">S7</h6>
          <h5 className="hover:underline">Naman</h5>
        </div>
        <div className="w-[4rem] h-[4rem] rounded-full bg-red-300 flex flex-col ml-[13rem] -mt-[2.5rem] text-white justify-center items-center text-3xl font-semibold">
          L
        </div>
        <div className="flex flex-col border-[.125rem] border-gray-400 w-[16rem]  justify-center items-center ml-[.9rem] mt-[8rem]"></div>
        <div className="flex">
          <img src={image} alt="" className="w-[2rem] h-[2rem] ml-[13rem]" />
          <img src={image2} alt="" className="w-[2rem] h-[1.8rem] ml-[.2rem]" />
        </div>
      </div>
      {/* Third block */}
      <div className="w-[18rem] h-[18rem] border-2 border-black rounded-2xl flex flex-col cursor-pointer mx-2">
        <div className="bg-gray-600 text-white rounded-t-xl h-[6rem]">
          <h4 className="hover:underline">B.tech 2nd year IT</h4>
          <h6 className="hover:underline">S7</h6>
          <h5 className="hover:underline">Kushagra</h5>
        </div>
        <div className="w-[4rem] h-[4rem] rounded-full bg-red-300 flex flex-col ml-[13rem] -mt-[2.5rem] text-white justify-center items-center text-3xl font-semibold">
          L
        </div>
        <div className="flex flex-col border-[.125rem] border-gray-400 w-[16rem]  justify-center items-center ml-[.9rem] mt-[8rem]"></div>
        <div className="flex">
          <img src={image} alt="" className="w-[2rem] h-[2rem] ml-[13rem]" />
          <img src={image2} alt="" className="w-[2rem] h-[1.8rem] ml-[.2rem]" />
        </div>
      </div>
      {/* Fourth block */}
      <div className="w-[18rem] h-[18rem] border-2 border-black rounded-2xl flex flex-col cursor-pointer mx-2">
        <div className="bg-gray-600 text-white rounded-t-xl h-[6rem]">
          <h4 className="hover:underline">B.tech 2nd year IT</h4>
          <h6 className="hover:underline">S7</h6>
          <h5 className="hover:underline">Lakshya kr</h5>
        </div>
        <div className="w-[4rem] h-[4rem] rounded-full bg-red-300 flex flex-col ml-[13rem] -mt-[2.5rem] text-white justify-center items-center text-3xl font-semibold">
          L
        </div>
        <div className="flex flex-col border-[.125rem] border-gray-400 w-[16rem]  justify-center items-center ml-[.9rem] mt-[8rem]"></div>
        <div className="flex">
          <img src={image} alt="" className="w-[2rem] h-[2rem] ml-[13rem]" />
          <img src={image2} alt="" className="w-[2rem] h-[1.8rem] ml-[.2rem]" />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
