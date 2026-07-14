// import React from 'react'

import { useState } from "react";

const Usestate = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  return (
    <div className="bg-black place-content-center flex items-center h-screen">
      <div className="h-50 w-60 text-center  bg-pink-200 rounded-2xl">
        <h1 className="p-5 text-2xl font-bold">Counter {num}</h1>
        <button
          className="bg-sky-300 p-2 rounded-2xl hover:bg-blue-200 "
          onClick={increaseNum}
        >
          Increase
        </button>

        <button
          className="bg-sky-300 ml-5 mt-20 p-2 rounded-2xl hover:bg-blue-200"
          onClick={decreaseNum}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Usestate;
