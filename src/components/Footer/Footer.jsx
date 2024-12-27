import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='logo' />
                    <p>Step into OrchidFoods, where culinary artistry meets the elegance of nature's most exquisite flower. Just like the orchid, known for its beauty and diversity, our dishes are crafted with care, creativity, and a touch of sophistication. Whether you're savoring our flavorful appetizers, indulging in our signature mains, or delighting in decadent desserts, every bite tells a story of passion and quality.</p>
                        <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+9472 507 060</li>
                        <li>orchidfoods@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
        <p className='footer-copyright'>Copyright 2024 © orchidfoods.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer