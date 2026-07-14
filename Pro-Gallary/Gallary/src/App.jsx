// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
    // console.log(response.data)
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h1 className="text-gray-300 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold">
      Loading...
    </h1>
  );

  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[80%] flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center gap-10 items-center absolute left-[45%] bottom-2">
        <button
          onClick={() => {
            setindex(index - 1);
            setUserData([]);
            // console.log('prev is clicked')
          }}
          className="bg-amber-400 px-4 py-2 rounded cursor-pointer active:scale-95 "
        >
          Prev
        </button>

        <button
          onClick={() => {
            setindex(index + 1);
            setUserData([]);
            // console.log('next is clicked')
          }}
          className="bg-amber-400 px-4 py-2 rounded cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
