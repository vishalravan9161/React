// import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="bg-slate-500 p-5 text-white flex justify-between ">
        <h3 className="font-semibold  text-2xl">Sheriyians Codig School</h3>
           <div className="text-md gap-5 flex">
             <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
               <Link to='/contact'>Contact</Link>
           </div>
            
    </div>
  )
}

export default Navbar