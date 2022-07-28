import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
import {FaTimes, FaBars} from "react-icons/fa"


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div>
        <div className="navbar-container">
            <h1 className="logo">WDesigner</h1>
            <ul className={click ? "nav-items-mobile" : "nav-items"} onClick={() => setClick(false)}>
                <li className="nav-links">
                    <Link to="home" className="link" spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                </li>
                <li className="nav-links">
                    <Link to="about" className="link" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                </li>
                <li className="nav-links">
                    <Link to="blog" className="link" spy={true} smooth={true} offset={50} duration={500}>BLOG</Link>
                </li>
                <li className="nav-links">
                    <Link to="contact" className="link" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick} >
                {click ? <FaTimes size={25} style={{color: "#000"}} /> : <FaBars size={25} style={{color: "#000"}} />}
            </div>
        </div>
    </div>
  )
}

export default Navbar