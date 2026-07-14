// import React from 'react'
//Function and onChange event

const Function2 = () => {
  return (
    <div>
      <input
        className="bg-green-400 p-2 mx-5 my-5"
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default Function2;
