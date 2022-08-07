import React from 'react'
import logo from "./location.png"

const Navbar = () => {
    return (
     <div className="Navbar">
     <img src={logo} alt="null" className="Navbar--img"/>
     <p>My Travel Journal.</p>
     </div>
    )
}

export default Navbar