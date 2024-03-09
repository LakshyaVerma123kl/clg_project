import React from "react";

function Studentlogin() {
  return (
    <div className="flex justify-between w-[80rem] h-[30rem]">
      <div className="w-[40rem] h-[30rem] flex flex-col justify-around">
        <h1 className="text-4xl font-[Helvetica Neue] font-bold">Login</h1>
        <h2 className="text-3xl font-[Helvetica Neue] font-semibold">
          Username
        </h2>
        <input
          type="text"
          name="username"
          id="std"
          placeholder="Enter Username..."
          className="h-[3rem] rounded-full border-none p-3"
        />
        <h2 className="text-3xl font-[Helvetica Neue] font-semibold">
          Password
        </h2>
        <input
          type="text"
          name="password"
          id="pass"
          placeholder="Enter Password..."
          className="h-[3rem] rounded-full border-none p-3"
        />
      </div>
      <div className="w-[35rem] h-[30rem] bg-[url('./assets/study2.avif')] bg-contain rounded-2xl"></div>
    </div>
  );
}

export default Studentlogin;
