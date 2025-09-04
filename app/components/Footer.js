import React from 'react'
import Linkedin from "../../public/assets/linkedin.svg"
import Insta from "../../public/assets/insta.svg"
import Twitter from "../../public/assets/twitter.svg"
import Location from "../../public/assets/location.svg"

function Footer() {
  return (
    <div className='footer'>
        <div className='socials'>
            <Linkedin/>
            <Insta/>
            <Twitter/>
        </div>      
        <p>Connect with us on <br/>social media</p>
        <div className='location'><Location/> <span>Lagos, Nigeria</span></div>
    </div>
  )
}

export default Footer
