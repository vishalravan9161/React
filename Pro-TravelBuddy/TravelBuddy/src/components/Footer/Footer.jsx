// import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mt-20">
        <div>
          <img
            className="h-15 w-15 pl-5 "
            src="https://www.svgrepo.com/show/509186/paper-plane.svg"
            alt=""
          />
          <h1 className="text-xl font-bold ml-3">Travel Buddy</h1>

          <img
            className="h-100 w-150"
            src="https://plus.unsplash.com/premium_vector-1682269843498-0a49c6677455?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="font-semibold">
          <h1 className="font-extrabold">PRODUCTS</h1>
          <p>Download App</p>
          <p>Travel Buddy</p>
          <p>Travel Buddy Pro</p>
          <p>Travel Buddy For Terms</p>
          <p>Help Center</p>
        </div>

        <div className="font-semibold">
          <h1 className="font-extrabold">NEWS & RESOURCES</h1>
          <p>blogs</p>
          <p>Press</p>
          <p>Jobs</p>
          <p>User Agreement</p>
          <p>Privacy Popcy</p>
          <p>Security</p>
          <p>Cookies Preferences</p>
        </div>

        <div className="font-semibold">
          <h1 className="font-extrabold">PARTNERS</h1>
          <p>Developer API</p>
          <p>Supported Booking Sites</p>
        </div>
      </div>

      <hr className="text-gray-300" />

      <div className="flex flex-row ml-165 h-10 w-10 mt-20 gap-5 place-content-center ">
        <img
          src="https://www.svgrepo.com/show/303376/twitter-4-logo.svg"
          alt=""
        />
        <img
          src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
          alt=""
        />
        <img
          src="https://www.svgrepo.com/show/303113/facebook-icon-logo.svg"
          alt=""
        />
        <img
          src="https://www.svgrepo.com/show/303299/linkedin-icon-2-logo.svg"
          alt=""
        />
        <img
          className="rounded-md"
          src="https://i.pinimg.com/736x/70/b6/3d/70b63decd76c2d806612500c2a78a045.jpg"
          alt=""
        />
      </div>

      <h1 className="ml-135 mt-10 mb-20 font-semibold text-sm">
        2003-2022 Travel Buddy. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
