// import React from 'react'

import { useEffect, useState } from "react";

const UseEffect3 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function achanging() {
    console.log("A ki value change ho gayi.");
  }

  function bchanging() {
    console.log("B ki value change ho gayi.");
  }

  useEffect(
    function () {
      achanging();
    }, [a],
  );

  useEffect(
    function () {
      bchanging();
    },[b],
  );

  return (
    <div>
      <div className=" bg-amber-300 text-5xl p-5 mx-10 my-10">
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
      </div>

      <button
        className="bg-green-500 p-5 mx-10 my-10 rounded-2xl"
        onClick={() => {
          setA(a + 1);
        }}
      >
        change A
      </button>

      <button
        className="bg-green-500 p-5 mx-10 my-10 rounded-2xl"
        onClick={() => {
          setB(b - 1);
        }}
      >
        change B
      </button>
    </div>
  );
};

export default UseEffect3;
