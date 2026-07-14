// import React from 'react'

import { useState } from "react";

const Interface = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const Notedelete = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="bg-gray-500 h-screen text-white p-10 flex flex-col-2 justify-between">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-col w-90"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          className="border text-md mt-5 p-1 outline-none"
          placeholder="Enter Notes Heading"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <h1 className="mt-5 text-xl">Notes Details</h1>
        <textarea
          className="border text-md h-20 mt-5 p-1 outline-none rounded"
          placeholder="Enter Notes Details"
          type="text"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-blue-300 p-2 active:bg-amber-500 rounded-2xl mt-5 w-1/3 ml-25 text-black">
          Add Note
        </button>
      </form>

      <div className=" p-5 w-170 h-full border-l-2">
        <h1 className="text-3xl font-semibold p-5">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-50 w-40 text-center bg-amber-50 rounded-2xl flex flex-col justify-between "
              >
                <h1 className="text-black font-bold p-2">{elem.title}</h1>
                <h2 className="text-gray-600"> {elem.details}</h2>
                <button
                  onClick={Notedelete}
                  className="bg-amber-500 mb-2 rounded-xl mx-2 my-3 active:bg-amber-200"
                >
                  Note Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interface;
