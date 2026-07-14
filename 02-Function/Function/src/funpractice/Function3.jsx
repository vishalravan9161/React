// import React from 'react'

const Function3 = () => {
  function inputchanging(val) {
    console.log(val);
  }

  return (
    <div>
      <input
        className="bg-green-400 p-2 mx-5 my-5 rounded-2xl"
        onChange={function (elem) {
          inputchanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default Function3;
