import React from 'react'
import { Link } from 'react-router-dom'
import Calcul from '../calcu/Calcul'

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{display:"flex",justifyContent:"center"}}>
    <div className="navbar-nav" style={{display:"flex",justifyContent:"space-around"}}>
       <Link to={"/"} className="nav-item nav-link active"><li href="#">Clacul</li></Link>
      <Link to={"tp2"} className="nav-item nav-link active"><li href="#">Slider</li></Link>
       <Link to={"tp3"} className="nav-item nav-link active" ><li href="#">To do list</li></Link>
       <Link to={"tp4"}className="nav-item nav-link active"><li  href="#">Pagination</li></Link>    
    </div>
  </div>
</nav>
  )
}
