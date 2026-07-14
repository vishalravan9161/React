// import React from 'react'

const Cards = (props) => {



  return (
    <div className="text-black p-3 justify-center items-center place-content-center ">
        
      <div className="border border-white w-70 h-87 bg-white rounded-2xl">

        <div  className=" flex p-3">
            <img className="h-12 w-12 rounded-full border border-gray-300" 
            src={props.logo} alt="" />

             <button className="ml-30 text-gray-500 ">
                <h1 className="grid grid-cols-2 border border-gray-200 h-8 rounded-md p-1 hover hover:bg-gray-300"> Save 
                    <img className=" h-6 w-7 ml-0.5" 
                    src="https://img.icons8.com/?size=100&id=26087&format=png&color=000000" alt="" /></h1>
              
             </button>
           
       </div>

       <div className="flex gap-2 p-1">
         <h1 className="text-[17px] font-bold ml-2">{props.company}</h1>
            <span className="text-slate-400 text-[10px] mt-2 font-bold">{props.date}</span>
       </div>

       <h1 className="text-2xl font-medium ml-3"
       >{props.post}</h1>

       <div className="flex gap-3 p-4">
             
            <span className="bg-gray-200 rounded-sm p-0.5 text-[13px] font-medium pl-3 pr-3"
            >{props.type}</span>
            <span className="bg-gray-200 rounded-sm p-0.5 text-[13px] font-medium pl-3 pr-3"
            >{props.level}</span>
       </div>
                <hr className="mt-12 text-gray-300 " />
       <div className=" gap-25 flex p-3">
           <div>
            <h1 className="font-semibold ">{props.payment}</h1>
           <h3 className="text-[12px] text-gray-500">{props.location}</h3>
           </div>
                <div className=" bg-black text-white pl-5 pr-4 mb-2 place-content-center   rounded-md hover hover:bg-gray-500">
                    <button className="font-semibold">Apply</button>
                </div> 

       </div>

      </div>
    
    </div>
  )
}

export default Cards