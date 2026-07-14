// import React from 'react'

import { useState } from "react";

const BatchUpdate = () => {
  const [num, setNum] = useState(0);
  const btnClicked = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div className="h-200 flex place-content-center items-center bg-amber-300 ">
      <h1 className="bg-pink-300 text-2xl ">{num}</h1>
      <button className="bg-slate-400 px-4 " onClick={btnClicked}>
        {" "}
        Click
      </button>
    </div>
  );
};

export default BatchUpdate;
