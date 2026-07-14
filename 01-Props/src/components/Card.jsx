// import React from 'react'

const Cards = (props) => {
  console.log(props)
  return (
      <>
        <div className=" p-2">
            <div className="w-50 border border-amber-50 text-white bg-slate-700 rounded-xl relative">
                <img className=" p-2 rounded-xl" src={props.img} alt="" />
                <div className="ml-5">
                  <h1 className="text-2xl ">{props.user} {props.age}</h1>
                <h3 className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quos?</h3>

                </div>
                <div className="flex  place-content-center bg-blue-400 rounded-md mt-2 mb-2 ml-4 mr-4 hover:bg-blue-300">
                  <button className="font-medium ">View Profile</button>
                </div>
            </div>

        </div>
        

       
      </>
  )
}

export default Cards