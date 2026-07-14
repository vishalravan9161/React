// import React from 'react'

const Maincontent = () => {
  return (
    <div className="bg-amber-50">
      <div className="bg-[url('https://plus.unsplash.com/premium_vector-1742938792039-68045f921fc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-140 object-cover">
        <div className=" place-content-center text-center text-slate-800 font-bold">
          <h1 className="text-5xl pb-5 mt-10">An easier trip,every time</h1>
          <p className="font-semibold text-black">
            Imagine chicking one place for all your travel details and getting a
            heads <br /> up as things happen thoughout your trip.See why life
            without Travel Buddy <br />
            is a distant memory for millions of travelers and signUp today!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" ml-50 mt-20">
          <h1 className="text-5xl text-slate-700 font-extrabold mt-5 mb-5">
            You handle the booking,
            <br />
            we'll take it from there
          </h1>
          <p className="text-md font-semibold">
            Unlike other travel apps, Travel Buddy can organize your travel
            plans <br />
            atter where you book. Simply forward your confirmation emails <br />
            to <span className="font-bold">plans@travelbuddy.com</span> and in a
            matter of seconds, Travel Buddy <br />
            to plans@trave will create a master itinerary for every trip.
          </p>

          <button className="bg-blue-500 px-4 py-3 rounded-2xl mt-5 font-semibold text-slate-900 hover:bg-blue-300">
            LEARN HOW IT WORKS
          </button>
        </div>
        <div className="h-100 w-100">
          <img
            src="https://plus.unsplash.com/premium_vector-1723276520841-5c146f32b364?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <hr className="text-gray-300 mt-10" />

      <div className="flex flex-row justify-between">
        <img
          className="h-100 w-100 mt-10"
          src="https://plus.unsplash.com/premium_vector-1745325853054-097545f8200e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="mt-10 mr-50 ">
          <h1 className="text-5xl font-extrabold text-slate-800">
            Helpful reminders/alerts <br />
            so you never miss a beat
          </h1>

          <p className="mt-8 font-semibold">
            Packed with features that give you a leg up on changes and <br />
            help you make the most of all your trips, Travel Buddy Pro <br />
            is where the magic happens.
          </p>

          <button className="bg-blue-500 py-3 px-5 mt-5 rounded-2xl font-semibold hover:bg-blue-300">
            MORE ABOUT PRO
          </button>
        </div>
      </div>
      <hr className="text-gray-300 mt-10" />

      <div className="flex flex-row justify-between">
        <div className=" mt-10 ml-50">
          <h1 className=" mt-10 text-5xl font-extrabold text-slate-800 mb-5">
            Always know where <br />
            to be and when
          </h1>

          <p className="text-md font-semibold">
            Need a reminder when it's time to leave for the airport? <br />
            Not sure where to eat in the airport or near your hotel? <br />
            Travel Buddy has you covered.
          </p>

          <button className="bg-blue-500 py-3 px-5 mt-5 rounded-2xl font-semibold hover:bg-blue-300">
            DOWNLOAD THE APP
          </button>
        </div>

        <div className="">
          <img
            className="h-100 w-100"
            src="https://plus.unsplash.com/premium_vector-1682299227774-b4fa6d23b5ad?q=80&w=883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <hr className="text-gray-300 mt-10" />

      <div className=" grid text-center items-center place-content-center mt-10 mb-10">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-5">
          Try the travel app that <br />
          keeps up with you
        </h1>

        <p className="text-md font-semibold">
          keeps up with you So many trips, so little time. Let Travel Buddy{" "}
          <br />
          intt haveto worry about the details, so you don't have to
        </p>
        <button className="bg-blue-500 h-10 w-50 mt-5 grid place-content-center font-medium ml-40  rounded-2xl hover:bg-blue-300">
          SIGN UP FOR FREE
        </button>

        <div className=" ">
          <img
            className="h-100 w-100"
            src="https://plus.unsplash.com/premium_vector-1711987478533-5aa44c500e90?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <hr className="text-gray-300 mt-10" />
    </div>
  );
};

export default Maincontent;
