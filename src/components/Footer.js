import React from 'react'
import "./Footer.css"
import ContImg from "../images/contact.jpg"


const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-info">
                <div className="footer-col-1">
                    <div className="footer-text">
                        <h3>Work with Me</h3>
                        <div className="address">
                            <h4>Address</h4>
                            <p>123 Anywhere ST, Any City</p>
                        </div>
                        <div className="contact">
                            <h4>Phone</h4>
                            <p>123456789</p>
                        </div>
                        <div className="email">
                            <h4>Email</h4>
                            <p>name@gmail.com</p>
                        </div>
                    </div>
                    <div className="copyright">
                            <p>&copy; 2020. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src={ContImg} alt="contactImg" className="footer-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer