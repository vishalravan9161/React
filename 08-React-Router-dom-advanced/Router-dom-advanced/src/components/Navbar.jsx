// import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-sky-800 w-full p-5 flex justify-between  ">
      <h1 className="text-xl font-semibold">Sheryians Coding School</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>

        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
