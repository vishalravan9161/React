// import React from 'react'

import { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);

  useEffect(function () {
    console.log("useEffect is running...");
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-black border-4 p-5">Num is {num}</h1>

      <button
        className="bg-green-600 text-xl font-bold p-5 mx-5 my-5"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffect;
