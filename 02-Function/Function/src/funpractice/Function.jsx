import { useState } from "react";

const Function = () => {
  const [count, setcount] = useState(0);

  function addvalue() {
    setcount(count + 1);
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl pb-10 uppercase ">counter {count}</h1>
      <button className="p-2 bg-pink-500" onClick={addvalue}>
        Click Here
      </button>
    </div>
  );
};

export default Function;
