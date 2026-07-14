// import React from 'react'

const Card = (props,idx) => {
  return (
    <div className="">
        <a href={props.elem.url} target="_blank">

             <div  className=' h-50 w-62 border overflow-hidden hover:scale-95 rounded-xl cursor-pointer active:scale-95 scale-3d'
             key={idx}>
              <img className='h-full w-full object-cover'
              src={props.elem.download_url}alt="" />
            </div>

            <h1 
            className="text-gl font-semibold text-center mt-5"
            >{props.elem.author}</h1>
        </a>


    </div>
  )
}

export default Card