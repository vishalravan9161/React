// import React from 'react'

import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(
    function () {
      console.log("useEffect is running...");
    }, [num],
  );

  return (
    <div>
      <div className="bg-amber-200 text-black text-3xl p-3 mx-10 my-10">
        <h1>Num is {num}</h1>
        <h1>Num2 is {num2}</h1>
      </div>

      <button
        className="bg-green-500 p-5 mx-10 my-10 text-md"
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Hover
      </button>
    </div>
  );
};

export default UseEffect2;
