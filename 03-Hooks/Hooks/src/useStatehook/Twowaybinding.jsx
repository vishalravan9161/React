// import React from 'react'

import { useState } from "react";

const Twowaybinding = () => {
  const [title, setTitle] = useState("");

  const Submithandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <input
          className="bg-slate-300 mx-5 my-5"
          type="text"
          value={title}
          placeholder="Enter Your Name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-slate-400">Submit</button>
      </form>
    </div>
  );
};

export default Twowaybinding;
