// import React from 'react'

const Header = () => {
  return (
    <div>
      <div
        className="bg-blue-100 h-30 flex flex-row 
        justify-between place-content-center items-center "
      >
        <div className="flex row ">
          <img
            className="h-15 w-15 pl-5 "
            src="https://www.svgrepo.com/show/509186/paper-plane.svg"
            alt=""
          />
          <h1 className="text-xl font-bold ml-3">Travel Buddy</h1>
        </div>

        <div className="mx-15 font-semibold">
          <span className=" hover:text-blue-700">Feature</span>
          <span className="mx-5  hover:text-blue-700">Pricing</span>
          <span className="mx-5 hover:text-blue-700">Login</span>
          <button className=" bg-blue-400 px-5 py-3 rounded-2xl hover:bg-blue-300 ">
            SIGN UP FOR FREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
