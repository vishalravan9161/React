// import React from 'react'

const Formhandling = () => {
  const Submithandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <input
          className="bg-gray-400 border border-amber-100 p-2 mt-5"
          type="text"
          placeholder="Enter Your name"
        />
        <button className="bg-gray-300 p-2 ml-4">Submit</button>
      </form>
    </div>
  );
};

export default Formhandling;
