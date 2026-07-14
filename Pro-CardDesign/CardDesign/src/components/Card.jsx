// import React from 'react'


const Card = (props) => {
  return (
    <div className="">

          <div className="items-center justify-center text-white ml-1 mr-1 mb-3 p-2 overflow-hidden ">
            
            <div className="text-wrap h-full w-full bg-amber-50 text-black place-content-center rounded-xl">
                    <img className="rounded-xl h-70 w-full  " 
                    
                    src={props.img} alt="" /> 
                          {/* Articles for cards  */} 
                   <article className=" p-5 text-balance"> 
                    <h1 className="text-2xl font-bold mb-5">{props.user}</h1> 

                    <h4 className="font-medium text-gray-600 text-[14px]"
                    
                    >Creative director & sneeker enthusiast. Sharing daily fits, design inspiration, 
                    and behind-the-scenes of building a mordern streetwear brand.</h4>

                   </article>

                    <div className=" text-balance ">

                      <div className="grid grid-cols-3 gap-4  text-center text-xl font-medium text-gray-700 ">
                        <span>{props.likes}</span>
                        <span>{props.posts}</span>
                        <span>{props.views}</span>
                    </div>

                  
                    <div className="grid grid-cols-3 gap-4  text-center mb-5 text-[14px] text-gray-400">
                        <span>Likes</span>
                        <span>Posts</span>
                        <span>Views</span>
                    </div>
                    </div>

                    <div className="text-xl text-center ml-2 mr-4 mb-6 font-medium text-black rounded-md bg-violet-500 
                    hover:bg-blue-300">
                      <button className="p-2">Follow me</button>
                    </div>
                    
            </div>

    </div>

    </div>
  )
}

export default Card