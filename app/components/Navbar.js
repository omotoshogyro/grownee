'use client'
import React from 'react'
import Grownee from "../../public/assets/grownee-lockup.svg"
import Twoflags from "../../public/assets/two_flags.svg"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
    
  const growneeRef = useRef(null);
  const navbarRef = useRef(null);

   useEffect(() => {
    
    const nav = navbarRef.current

   ScrollTrigger.create({
  trigger: document.body,
  start: "top+=700 top",
  onEnter: () => {
    gsap.fromTo(nav, 
      { opacity: 0, y: -50 },
      { duration: 0.3, opacity: 1, y: 0 } 
    );
    nav.classList.add("active");
    nav.classList.remove("initial");
  },
});

  }, []);

  return (
    <div className='navbar initial' ref={navbarRef}>
      <Grownee ref={growneeRef}/>
      <button className='flex'><Twoflags className="icon"/><span>Join Waitlist</span></button>
    </div>
  )
}

export default Navbar
