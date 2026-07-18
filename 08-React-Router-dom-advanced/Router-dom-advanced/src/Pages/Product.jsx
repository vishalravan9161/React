// import React from 'react'

import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="">
      <div className="text-xl  text-center">
        <Link className="mr-5" to="/product/men">
          Men
        </Link>
        <Link to="/product/women">Women</Link>
        <Outlet />
      </div>
      <div className="flex text-5xl text-white place-content-center h-screen">
        <h1 className="flex text-center items-center underline">
          Product Page
        </h1>
      </div>
    </div>
  );
};

export default Product;
