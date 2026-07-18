// import React from 'react'

import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const Naviget = useNavigate();
  return (
    <div className="bg-cyan-600 p-3 w-full text-white gap-5 flex">
      <button
        onClick={() => {
          Naviget("/");
        }}
        className="bg-amber-700 px-3 py-1 rounded cursor-pointer active:scale-95 "
      >
        Back to Home Page
      </button>

      <button
        onClick={() => {
          Naviget(-1);
        }}
        className="bg-amber-700 px-3 py-1 rounded cursor-pointer active:scale-95"
      >
        Back
      </button>

      <button
        onClick={() => {
          Naviget(+1);
        }}
        className="bg-amber-700 px-3 py-1 rounded cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
