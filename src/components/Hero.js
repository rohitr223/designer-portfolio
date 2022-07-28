import React from 'react'
import "./Hero.css"
import HomeImg from "../images/home.jpg"


const Hero = () => {
  return (
    <div id="home">
        <div className="hero-container">
            <div className="hero-info">
                <div className="hero-col-1">
                    <img src={HomeImg} alt="home" className="hero-img" />
                </div>
                <div className="hero-col-2">
                    <div className="hero-text">
                        <h2>Kenny <br/>Bardot</h2>
                        <h4>GRAPHIC DESIGNER</h4>
                        <p>  
                            I am a graphic designer based in France. My <br/>
                            specializations include Digital Branding<br/>
                            and Visual Designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero