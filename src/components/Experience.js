import React from 'react'
import "./Experience.css"
import BlogImg from "../images/blog.jpg"


const Experience = () => {
  return (
    <div id="blog">
        <div className="exp-container">
            <div className="exp-info">
                <div className="exp-col-1">
                  <img src={BlogImg} alt="blogImg" className="exp-img"/>
                </div>
                <div className="exp-col-2">
                  <div className="exp-text">
                    <h2>I have learned from</h2>
                    <div className="blog-list">
                      <li>GRPA Studios(Certification Course in Digital Design, 2020)</li>
                      <li>Wolloughdate University(MFA ,2018-2019)</li>
                      <li>Trempleway Academy of Arts(BFA ,2015-2016)</li>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience