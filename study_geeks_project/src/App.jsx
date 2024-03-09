import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./BasicComponent/header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="absolute top-20 flex flex-col pb-5">
        <div className="w-[90rem] h-[40rem] bg-gradient-to-br from-[#fdcdb1] to-[#fce1d2] rounded-3xl flex justify-center -ml-[7rem] p-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
