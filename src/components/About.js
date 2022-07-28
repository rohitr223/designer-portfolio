import React from 'react'
import "./About.css"
import AboutImg from "../images/about.jpg"


const About = () => {
  return (
    <div id="about">
        <div className="about-container">
            <div className="about-info">
                <div className="about-col-1">
                    <img src={AboutImg} alt="aboutimg" className="about-img" />
                </div>
                <div className="about-col-2">
                    <div className="about-text">
                        <h3>As an Artist</h3>
                        <p>
                            My goal is to help every brand come<br/>
                            live through design. In todays highly<br/>
                            competitive digital space, it is important<br/>
                            for an online businesses to establish their<br/>
                            presence as they would traditionally do in<br/>
                            a retail space.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default About