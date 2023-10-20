import React from 'react'
import { MdDarkMode } from 'react-icons/md'
import { BsFillBrightnessHighFill } from 'react-icons/bs'

function Navbar() {
  return (
    <div>
        <div className="navbar-container">
             <div className="navbar-content-1"></div>
             <div className="navbar-content-2"><BsFillBrightnessHighFill/></div>
             <div className="navbar-content-3"><MdDarkMode/></div>
             <div className="navbar-content-4">
                <img src="bonheur.jpg" alt="this is my image"  width='20px'/>
             </div>
        </div>r
    </div>
  )
}

export default Navbar