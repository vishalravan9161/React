// import React from 'react'
import { useState } from "react";
const ObdeStruc = () => {
  const [num, setNum] = useState({ user: "Sarthak", age: 18 });

  const btnClicked = () => {
    const newNum = { ...num };  //Destructuring
    newNum.user = "Aman";
    newNum.age = 20;
    setNum(newNum);
  };

  return (
    <div>
      <h1 className="bg-green-300 p-5 text-2xl ">
        {num.user}, {num.age}
      </h1>

      <button className="bg-orange-400 p-2" onClick={btnClicked}>
        click
      </button>
    </div>
  );
};

export default ObdeStruc;
